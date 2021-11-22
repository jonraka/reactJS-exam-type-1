import React from 'react';
import style from './Task7.module.css';
import { useState, useRef } from 'react';

function Task7() {
    const [isDarkMode, toggleDarkMode] = useState(false);

    //nezinau kur ta ref naudoti siame komponenete
    const ref = useRef();
    const onRefBtnClicked = () => {
        const refBtnStyle = ref.current.style;
        refBtnStyle.backgroundColor = refBtnStyle.backgroundColor === 'yellow' ? 'cyan' : 'yellow';
    };

    return (
        <div className={isDarkMode ? style.dark_mode : style.light_mode}>
            <div className={style.main}>
                <h3>Task 7</h3>
                <h1>Hello world</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                    exercitationem commodi possimus vero natus corrupti sit aut fugiat excepturi,
                    esse, iusto, velit laboriosam delectus dolorum. Labore nam quis libero iusto.
                </p>
                <div>
                    <input
                        type="button"
                        value="Dark theme"
                        className={style.black_btn}
                        onClick={() => toggleDarkMode(true)}
                        style={isDarkMode ? { textDecoration: 'underline' } : null}
                    />
                    <input
                        type="button"
                        value="Light theme"
                        className={style.white_btn}
                        onClick={() => toggleDarkMode(false)}
                        style={!isDarkMode ? { textDecoration: 'underline' } : null}
                    />
                    {/* useless button for ref requirement */}
                    <input
                        type="button"
                        value="Ref Button"
                        ref={ref}
                        className={style.white_btn}
                        onClick={onRefBtnClicked}
                    />
                </div>
            </div>
        </div>
    );
}

export default Task7;

/* Task 7
Task 7 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
