import s from './header.module.scss';
import Logo from '../../assets/logo.svg';
import { useLocation, Link } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className={s.header}>
            <div className={s.headerLogo}>
                <Link to='/'>
                    <a className={s.logoLink}>
                        <img src={Logo} />
                        <span>Chatify</span>
                    </a>
                </Link>
            </div>
            <div className={s.headerMenu}>
                <Link to='/'
                className={location.pathname === "/" ? s.headerMenuItem + ' ' + s.active : s.headerMenuItem}>
                    <a className={location.pathname === "/" ? s.headerMenuItem + ' ' + s.active : s.headerMenuItem}>
                        Главная
                    </a>
                </Link>
                <Link to='/chat'
                className={location.pathname === "/chat" ? s.headerMenuItem + ' ' + s.active : s.headerMenuItem}>
                    <a className={location.pathname === "/chat" ? s.headerMenuItem + ' ' + s.active : s.headerMenuItem}>
                        Чат
                    </a>
                </Link>
            </div>
            <div className={s.notificationBtnContainer}>
                <button className={s.notificationsBtn}>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/bell-479-458061.png" />
                </button>
            </div>
        </div>
    )
}