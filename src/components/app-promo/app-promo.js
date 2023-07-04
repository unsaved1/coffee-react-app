import './app-promo.scss';

import Nav from '../app-nav/app-nav';
import Devider from '../app-devider/app-devider';
import Btn from '../app-btn/app-btn';


const Promo = ({bgUrl, title, titleClass, devider, subtitle, btnValue}) => {
    const setDevider = () => {
        if (devider) {
            return (
                <Devider/>
            )
        }
    };

    const setSubtitle = () => {
        if (subtitle) {
            return (
                <h2 className="promo__subtitle">
                <p>We makes every day full of energy and taste</p>
                <p>Want to try our beans?</p>
            </h2>
            )
        }
    };

    const setBtn = () => {
        if (btnValue) {
            return (
                <Btn value={btnValue}/>
            )
        }
    }

    const classes = 'title promo__title ';

    return (
        <section className='promo' style={{background: bgUrl}}>
            <div className='container'>
                <Nav/>
                <h1 className={classes + titleClass}>{title}</h1>
                {setDevider()}
                {setSubtitle()}
                {setBtn()}
            </div>
        </section>
    )
};

export default Promo;
