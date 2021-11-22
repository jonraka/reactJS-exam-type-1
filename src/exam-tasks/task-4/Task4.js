import React from 'react';
import style from './Task4.module.css';
import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'LIKE':
            return { ...state, userLiked: true, userDisliked: false };
        case 'DISLIKE':
            return { ...state, userLiked: false, userDisliked: true };
        default:
            return state
    }
};

function Task4() {
    const [state, dispatch] = useReducer(reducer, {
        likes: 15,
        dislikes: 14,
        userLiked: false,
        userDisliked: false
    });

    const onVote = (e) => {
        if (e.target.dataset.vote === 'like' && !state.userLiked) {
            dispatch({type: 'LIKE'})
        } else if (e.target.dataset.vote === 'dislike' && !state.userDisliked) {
            dispatch({type: 'DISLIKE'})
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.main}>
                <h3>Task 4</h3>
                <div className={style.icons}>
                    <button
                        data-vote="like"
                        onClick={onVote}
                        className={state.userLiked ? style.active : null}
                    >
                        <i
                            className={`fa fa-thumbs-up ${style.icon}`}
                            data-vote="like"
                            aria-hidden="true"
                        ></i>
                        {state.likes + Number(state.userLiked)}
                    </button>
                    <button
                        data-vote="dislike"
                        onClick={onVote}
                        className={state.userDisliked ? style.active : null}
                    >
                        <i
                            className={`fa fa-thumbs-down ${style.icon}`}
                            data-vote="dislike"
                            aria-hidden="true"
                        ></i>
                        {state.dislikes + Number(state.userDisliked)}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Task4;

/* Task 4
Atkurkite šį komponentą: https://prnt.sc/1296zmk

Pastabos, leidžiama balsuoti, tik vieną kartą. 
Paspaudus ant vieno mygtuko, antrą kartą paspausti ant jo 
negalima, tačiau leidžiama pakeisti nuomonę ir paspausti 
ant kito. Tokiu atveju nuo prieš tai paspausto balsas "nuimamas"
ir perduodamas kitam.

Pastaba: būtina panaudoti useReducer
*/
