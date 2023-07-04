import './app-filter.scss';

const Filter = (props) => {
    const btnsData = [
        {name:'Brazil', value: 'Brazil'},
        {name:'Kenya', value: 'Kenya'},
        {name:'Columbia', value: 'Columbia'},
    ];

    const btns = btnsData.map(({name, value}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-filter_active' : ''; 
        
        return <button 
            key={name} 
            type='button' 
            className={`btn-filter ${clazz}`}
            onClick={() => props.onFilterItems(name)}>{value}</button>
    })

    return (
        <div className="btns-filter">
            <label>Or filter</label>
            {btns}
        </div>
    )
};

export default Filter;

