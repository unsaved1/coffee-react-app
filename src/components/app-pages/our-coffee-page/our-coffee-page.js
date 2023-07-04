import { Component } from "react";
import './our-coffee-page.scss';

import Promo from "../../app-promo/app-promo";
import About from "../../app-about/app-about";
import Filter from "../../app-filter/app-filter";
import Panel from "../../app-panel/app-panel";
import List from "../../app-list/app-list";
import Footer from "../../app-footer/app-footer";

class OurCoffePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {src: './img/items/aromistico-coffee.png', alt: 'aromistico', name: 'AROMISTICO Coffee 1 kg', price: '6.99', country: 'Brazil', id:'1'},
                {src: './img/items/solimo-coffee.png', alt: 'solimo', name: 'Solimo Coffee Beans 4 kg', price: '9.99', country: 'Kenya', id:'2'},
                {src: './img/items/presto-coffee.png', alt: 'presto', name: 'Presto Coffee Beans 1.5 kg', price: '4.99', country: 'Columbia', id:'3'},
                {src: './img/items/aromistico-coffee.png', alt: 'aromistico', name: 'AROMISTICO Coffee 3.5 kg', price: '14.99', country: 'Kenya', id:'4'},
                {src: './img/items/aromistico-coffee.png', alt: 'aromistico', name: 'Presto Coffee Beans 2 kg', price: '6.99', country: 'Brazil', id:'5'},
                {src: './img/items/solimo-coffee.png', alt: 'solimo', name: 'Solimo Coffee Beans 3.7 kg', price: '8.99', country: 'Brazil', id:'6'},
            ], 
            term: '',
            filterProp: ''
        }
    }

    searchItems = (items, term) => {
        if (term === '') {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }  

    filterItems = (items, filterProp) => {
        switch (filterProp) {
            case 'Brazil': 
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya': 
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia': 
                return items.filter(item => item.country === 'Columbia');
            default:
                return items;
        }
    }

    onFilterItems = (filterProp) => {
        this.setState({filterProp})
        
    }



    render() {
        const {data, term, filterProp} = this.state;
        const visibleData = this.filterItems(this.searchItems(data, term), filterProp);
        return (
            <div className="our-coffee-page">
                <Promo 
                    bgUrl='url("img/bg/promo-our-coffee-bg.jpeg") center center/cover no-repeat'
                    title='Our Coffee'/>
                <About 
                    src='/img/about-girl-img.png'
                    text='
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. 
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                '/>
                <section className="search-panel">
                    <div className="container">
                        <div className="search-panel__wrapper">
                            <Panel onUpdateSearch={this.onUpdateSearch}/>
                            <Filter filter={filterProp} onFilterItems={this.onFilterItems}/>
                        </div>
                    </div>
                </section>
                <List data={visibleData} onMoveToItem={this.moveToItem}/>
                <Footer/>
            </div>
        )
    }
};

export default OurCoffePage;