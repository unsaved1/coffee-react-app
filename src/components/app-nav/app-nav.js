import './app-nav.scss';
import { ReactSVG } from 'react-svg'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li className='nav__item'>
                    <ReactSVG src='../icons/coffee-beans-nav.svg'/>
                    <Link to='/'>Coffee house</Link>
                </li>
                <li className='nav__item'><Link to='/ourCoffee'>Our coffee</Link></li>
                <li className='nav__item'><Link to='/forYourPleasure'>For your pleasure</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;