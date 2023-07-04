import './app-list.scss';
import Item from '../app-item/app-item';
import {Link} from 'react-router-dom';

const List = ({data, bgUrl, title}) => {
    const setAboutInfo = (e) => {
        const src = e.currentTarget.firstElementChild.getAttribute('src');
        localStorage.setItem('src', src);
    }
    const items = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <Link to='/coffeeItem' key={id}>
                <Item
                    key={id}
                    onSetAboutInfo={setAboutInfo}
                    {...itemProps}/>
            </Link>
        )
    })
    const setTitle = () => {
        if (title) {
            return <h2 className='title ourbest__title'>{title}</h2>
        }
    }

   

    return (
        <section className="list" style={{background: bgUrl}}>
            <div className="container">
                {setTitle()}
                <ul className="list__items">
                    {items}
                </ul>
            </div>
        </section>
    )
};
export default List;