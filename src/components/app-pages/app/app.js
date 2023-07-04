import { Component } from "react";

import Promo from "../../app-promo/app-promo";
import About from "../../app-about/app-about";
import List from "../../app-list/app-list";
import Footer from "../../app-footer/app-footer";



export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {src: './img/items/solimo-coffee.png', alt: 'solimo', name: 'Solimo Coffee Beans 2 kg', price: '10.73', id: 1},
                {src: './img/items/presto-coffee.png', alt: 'presto', name: 'Presto Coffee Beans 1 kg', price: '15.99', id: 2},
                {src: './img/items/aromistico-coffee.png', alt: 'aromistico', name: 'AROMISTICO Coffee 1 kg', price: '6.99', id: 3}
            ]
        }
    }

  


    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <Promo 
                    bgUrl='url("img/bg/promo-bg.jpeg") center center/cover no-repeat' 
                    title='Everything You Love About Coffee'
                    titleClass='title_big'
                    devider='true'
                    subtitle='true'
                    btnValue='more'/>
                <About text='Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.'/>
                <List data={data} bgUrl='url("./img/bg/our-best-bg.jpeg")' title='Our best'/>
                <Footer/>
            </div>
        )
    }
}