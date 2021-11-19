import React from 'react';
import twitterLogo from './images/2017-09-Twitter-logo.png';
import style from './Task5.module.css';

function Button({text, cls}){
  return <button className={cls}>{text}</button>
}

function Task5() {
    return (
        <div className={style.wrapper}>
            <div className={style.main}>
                <h3>Task 5</h3>
                <img src={twitterLogo} alt="twitter logo" className={style.logo} />
                <h1>Happening now</h1>
                <h3>Join Twitter Today.</h3>
                <Button text="Sign up" cls={style.btn}/>
                <Button text="Log in" cls={style.btn_white}/>
            </div>
        </div>
    );
}

export default Task5;

/* Task 5
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
