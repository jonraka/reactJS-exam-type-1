import React from 'react';
import style from './Task3.module.css';
import { useRef, useState } from 'react';

function Task3() {
    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const ageRef = useRef('');

    const [userData, setUserData] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        if (nameRef.current.value && lastNameRef.current.value && ageRef.current.value) {
            setUserData({
                name: nameRef.current.value,
                lastname: lastNameRef.current.value,
                age: ageRef.current.value,
            });
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.main}>
                <h3>Task 3</h3>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Vardas" ref={nameRef} minLength="1" required />
                    <input
                        type="text"
                        placeholder="Pavardė"
                        ref={lastNameRef}
                        minLength="1"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Amžius"
                        min="1"
                        max="130"
                        ref={ageRef}
                        required
                    />
                    <input type="submit" value="Pateikti" />
                </form>
                {userData && (
                    <>
                        <p>
                            Sveiki {userData.name} {userData.lastname}
                        </p>
                        <p>
                            {userData.age >= 18
                                ? 'Dėkojame, kad užsiregistravote'
                                : 'Deja, registracija negalima. Registruotis galima tik nuo 18 metų'}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default Task3;

/* TASK 3
Sukurkite forma, kurioje vartotojas galės nurodyti
- vardą
- pavardę
- amžių

Vartotojui užpildius formą ir paspaudus "Pateikti", po forma 
atsiras atsiras pasisveikinimas:
- Jei asmuo yra 18 m. ir vyresnis: "Dėkojame, kad užsiregistravote"
- Jei asmuo yra 17 m. ir jaunesnis: "Deja, registracija negalima. 
Registruotis galima tik nuo 18 metų"

Pastaba: panaudokite useState
*/
