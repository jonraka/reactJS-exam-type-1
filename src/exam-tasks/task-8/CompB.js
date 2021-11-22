import React from 'react';
import { useCounterContext } from './CounterContext';
import style from './Task8.module.css';

function CompB() {
    const { counter, counterAdd, counterSubtract } = useCounterContext();

    return (
        <div className={style.comp2}>
            <h4>CompB</h4>
            <div>
                <div>{counter}</div>
                <div>
                    <input
                        type="button"
                        value="+10"
                        onClick={counterAdd}
                        disabled={counter >= 100}
                    />
                    <input type="button" value="-10" onClick={counterSubtract} />
                </div>
            </div>
        </div>
    );
}

export default CompB;
