import { Link } from 'react-router-dom';
import style from '../Task1.module.css';

export default function MainPage() {
    return (
        <div>
            <h2>Main Page</h2>
            <div className={style.menu}>
                <Link to="/task1/about">About Us</Link>
                <Link to="/task1/contact">Contact Us</Link>
            </div>
        </div>
    );
}
