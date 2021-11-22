import React, { Component } from 'react';
import Row from './Row';
import style from './Task9.module.css';

export default class Task9 extends Component {
    state = { loading: true, data: null, errors: null, filterActive: true };
    ref = { current: null };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                if (res.status !== 200) throw new Error('Problem with the server, try again later');
                return res.json();
            })
            .then((res) => {
                this.setState((s) => ({ ...s, loading: false, data: res, errors: null }));
            })
            .catch((err) => {
                this.setState((s) => ({ ...s, loading: false, data: null, errors: err.message }));
            });
    }

    onChangeView = () => {
        this.setState((s) => ({ filterActive: !s.filterActive }));
        setTimeout(() => {
            this.ref.current.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    render() {
        const reducedData =
            this.state.filterActive && this.state.data
                ? this.state.data.reduce((acc, val) => {
                      if (!val.completed && acc.length < 5) acc.push(val);
                      return acc;
                  }, [])
                : this.state.data;

        return (
            <div className={style.wrapper} ref={this.ref}>
                <div className={style.main}>
                    <h3>Task 9</h3>
                    {this.state.loading && <p>Loading</p>}
                    {this.state.errors && <p>{this.state.errors}</p>}
                    {reducedData && (
                        <>
                            <input
                                type="button"
                                value={`Toggle View (${
                                    this.state.filterActive ? '5 incomplete' : 'All'
                                })`}
                                onClick={this.onChangeView}
                            />
                            <div className={style.table_wrapper}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Task</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reducedData.length === 0 ? (
                                            <tr style={{ color: 'black' }}>
                                                <td>No Items In The List</td>
                                                <td>-</td>
                                            </tr>
                                        ) : (
                                            reducedData.map((item) => (
                                                <Row key={item.id} item={item} />
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }
}

/* Task 9
Task 9 viduje atvaizduokite 5 būtinus atlikti darbų iš čia: https://jsonplaceholder.typicode.com/todos

Pastaba: 
- atkreipkite dėmesį, kad abu komponetai yra class tipo, 
todėl būtina naudoti "Class components State and Lifecycle";
- būtini atlikti darbai turi būti atvaizuojami vienoje eilutėje 
ir turėti šia informacija: pavadinimas, atlikta/neatlika (yes/no)
*/
