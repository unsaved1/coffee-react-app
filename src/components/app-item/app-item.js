
import './app-item.scss';


const Item  = ({src, alt, name, price, country, onSetAboutInfo}) => {
    const setCountry = (country) => {
        if (country) {
            return <h3 className="item__country">{country}</h3>
        }
    };

    

    return (
        <li className="item" onClick={onSetAboutInfo}>
            <img className='item__img' src={src} alt={alt}/>
            <div className="item__descr">
                <h3 className="item__name">{name}</h3>
                {setCountry(country)}
                <span className='item__price'>{price + '$'}</span>
            </div>
        </li>
    )
};
export default Item;