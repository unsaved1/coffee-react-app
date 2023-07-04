import { Component } from 'react';
import './app-panel.scss';


class Panel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    render() {
        
        return (
            <div className='search'>
                <label htmlFor="search">Lookiing for</label>
                <input id='search' type="text" 
                    className='panel__input search__input' 
                    placeholder='start typing here...'
                    onChange={this.onUpdateSearch}
                    value={this.state.term}/>
            </div>
        )
    }
};

export default Panel;