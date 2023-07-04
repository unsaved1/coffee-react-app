import { Component } from 'react';
import './pleasure-page.scss';

import Promo from '../../app-promo/app-promo';

import About from '../../app-about/app-about';
import List from '../../app-list/app-list';
import Footer from '../../app-footer/app-footer';

export default class PleasurePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {src: './img/items/aromistico-coffee.png', alt: 'aromistico', name: 'AROMISTICO Coffee 5 kg', price: '12.99', country: 'Brazil', id:'1'},
                {src: './img/items/presto-coffee.png', alt: 'presto', name: 'Presto Coffee Beans 2 kg', price: '6.99', country: 'Kenya', id:'2'},
                {src: './img/items/solimo-coffee.png', alt: 'solimo', name: 'Solimo Coffee Beans 1 kg', price: '2.99', country: 'Columbia', id:'3'},
                {src: './img/items/solimo-coffee.png', alt: 'solimo', name: 'Solimo Coffee Beans 3 kg', price: '6.99', country: 'Brazil', id:'4'},
                {src: './img/items/presto-coffee.png', alt: 'presto', name: 'Presto Coffee Beans 8 kg', price: '28.99', country: 'Brazil', id:'5'},
                {src: './img/items/solimo-coffee.png', alt: 'solimo', name: 'Solimo Coffee Beans 4 kg', price: '9.99', country: 'Brazil', id:'6'},
            ]
        }
    }
    render() {
        const {data} = this.state;
        return (
            <div className="pleasure">
                <Promo 
                    bgUrl='url("img/bg/promo-plesaure-bg.jpeg") center center/cover no-repeat'
                    title='For your pleasure'/>
                <About 
                    src='/img/about-coffee-img.png'
                    text='
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    '/>
                <List data={data}/>
                <Footer/>
            </div>
        )
    }
};
