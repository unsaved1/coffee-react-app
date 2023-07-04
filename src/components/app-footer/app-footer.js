import './app-footer.scss';

import Nav from '../app-nav/app-nav';
import Devider from '../app-devider/app-devider';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <Nav/>
                    <Devider/>
                </div>
            </div>
        </footer>
    )
};

export default Footer;