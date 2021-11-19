import React from 'react';
import MainPage from './pages/MainPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactsPage from './pages/ContactsPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import style from './Task1.module.css';

function Task1() {
    return (
        <div className={style.main}>
            <h3>Task 2</h3>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<MainPage />} />
                        <Route path="task1">
                            <Route path="about" element={<AboutUsPage />} />
                            <Route path="contact" element={<ContactsPage />} />
                            <Route index element={<MainPage />} />
                        </Route>
                    </Route>
                    <Route
                        path="*"
                        element={
                            <div>
                                <h1>Page Not Found (404)</h1>
                                <Link to="/">Go Home</Link>
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Task1;

/* TASK 1
task-1 aplanke, sukurkite aplanką ir pavadinkite jį "Pages". 
"Pages" aplanke turi būti sukurti dviejų puslapių komponentai 
"About Us" ir "Contacts", kurie viduje turės tik po h1 žymą,
kurioje bus randmas komponento pavadinimas (pvz. <h1>About Us</h1>)
ir mygtuką "Grįžti atgal", kurį paspaudus bus grįžtama atgal.

Tada, komponente Task1 (kuriame esate dabar) sukurkite navigaciją, 
kuri leis patekti į nurodytus "Pages" puslapių komponentus. 
Naudodami React Router DOM sukurkite SPA principo navigaciją.
"Pages" komponentų turinys turi būti atvaizduojamas Task1 komponente.
*/
