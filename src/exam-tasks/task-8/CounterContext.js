import { useContext, createContext, useState } from 'react';

const CounterContext = createContext({});

/** @returns {{counter: number, counterAdd: Function, counterSubtract: Function, counterMessage: string}} */
export const useCounterContext = () => useContext(CounterContext);

export const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const counterAdd = () => {
        if (counter < 100) setCounter((s) => s + 10);
    };
    const counterSubtract = () => setCounter((s) => s - 10);

    const counterMessage = counter >= 100 ? <p>Didinti nebegalima</p> : <></>;

    return (
        <CounterContext.Provider value={{ counter, counterAdd, counterSubtract, counterMessage }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterContext;
