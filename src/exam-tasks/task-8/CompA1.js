import React from 'react';
import { useCounterContext } from './CounterContext';
import style from './Task8.module.css';

function CompA1() {
    const { counter, counterAdd, counterSubtract } = useCounterContext();

    return (
        <div className={style.comp1}>
            <h5>CompA1</h5>
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

export default CompA1;
