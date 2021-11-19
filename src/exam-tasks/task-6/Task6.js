import React from 'react';
import style from './Task6.module.css';
import { useState, useEffect } from 'react';

function Task6() {
    const [state, setState] = useState({
        loading: true,
        errors: null,
        data: null,
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                if (res.status !== 200) throw new Error('Problem with the server, try again later');
                return res.json();
            })
            .then((res) => {
                setState({ loading: false, data: res, errors: null });
            })
            .catch((err) => {
                setState({ loading: false, data: null, errors: err.message });
            });
    }, []);

    return (
        <div className={style.wrapper}>
            <div className={style.main}>
                <h3>Task 6</h3>
                {state.loading && <p>Loading</p>}
                {state.errors && <p>{state.errors}</p>}
                {state.data && (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.data.map((user) => (
                                <tr key={user.id}>
                                    <td data-category="Name">{user.name}</td>
                                    <td data-category="Email">{user.email}</td>
                                    <td data-category="Company">{user.company.name}</td>
                                    <td data-category="Phone">{user.phone}</td>
                                    <td data-category="Address">
                                        {user.address.street}, {user.address.suite},{' '}
                                        {user.address.city}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Task6;

/* Task 6
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
