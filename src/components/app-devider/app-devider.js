import './app-devider.scss';
import { ReactSVG } from 'react-svg'

const Devider = () => {
    return (
        <div className="devider">
            <span></span>
            <ReactSVG src='../icons/coffee-beans.svg'/>
            <span></span>
        </div>
    )
};

export default Devider;