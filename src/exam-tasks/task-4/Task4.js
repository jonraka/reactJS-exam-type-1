import React from 'react';
import style from './Task4.module.css';
import { useState } from 'react';

function Task4() {
    const [savedVotes] = useState({
        likes: 15,
        dislikes: 14,
    });
    const [userVote, setUserVote] = useState({
        likes: 0,
        dislikes: 0,
    });

    const onVote = (e) => {
        if (e.target.dataset.vote === 'like') {
            setUserVote((s) => ({ likes: s.likes === 1 ? 0 : 1, dislikes: 0 }));
        } else {
            setUserVote((s) => ({ likes: 0, dislikes: s.dislikes === 1 ? 0 : 1 }));
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
                        className={userVote.likes ? style.active : null}
                    >
                        <i
                            className={`fa fa-thumbs-up ${style.icon}`}
                            data-vote="like"
                            aria-hidden="true"
                        ></i>
                        {savedVotes.likes + userVote.likes}
                    </button>
                    <button
                        data-vote="dislike"
                        onClick={onVote}
                        className={userVote.dislikes ? style.active : null}
                    >
                        <i
                            className={`fa fa-thumbs-down ${style.icon}`}
                            data-vote="dislike"
                            aria-hidden="true"
                        ></i>
                        {savedVotes.dislikes + userVote.dislikes}
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
