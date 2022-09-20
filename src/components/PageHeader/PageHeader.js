import './PageHeader.scss';
import logo from '../../assets/logo/MCC-logo.svg';
import { NavLink, Link, useLocation } from 'react-router-dom';
// more on using NavLink https://v5.reactrouter.com/web/api/NavLink/isactive-func
import loginIcon from '../../assets/icons/login-icon.svg';

const PageHeader = () => {
    return (
        <div className='page-header'>
            <div className='page-header__navigation'>
                <div>
                    <img src={logo} alt='MCC Logo' className='page-header__navigation-logo' />
                </div>
                <div className='page-header__navigation-links'>
                    <NavLink to='' className='page-header__navigation-link'>PROJECTS</NavLink>
                    <NavLink to='' className='page-header__navigation-link'>ABOUT</NavLink>
                    <NavLink to='' className='page-header__navigation-link'>CONTACT</NavLink>
                </div>
            </div>
            <div className='page-header__login'>
                <img src={loginIcon} alt='login icon' className='page-header__login-icon' />
            </div>
        </div>

    )
}

export default PageHeader