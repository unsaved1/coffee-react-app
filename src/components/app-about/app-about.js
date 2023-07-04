import Devider from '../app-devider/app-devider';
import './app-about.scss';

const About = ({src, text}) => {
    const image = () => {
        if (src) {
            return (
                <div className="about__img">
                    <img src={src} alt="girl with coffee" />
                </div>
            )
        }
    }
    return (
        <section className='about'>
            <div className="container">
                <div className="about__wrapper">
                    {image()}
                    <div className="about__text">
                        <h2 className="title about__title">About us</h2>
                        <Devider/>
                        <p className='about__descr'>
                        {text}
                        </p>
                    </div>
                </div>
                <div className="about__devider"></div>
            </div>
        </section>
    )
};

export default About;