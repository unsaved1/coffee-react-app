import { Component } from "react";

import './coffee-item-page.scss';

import Promo from "../../app-promo/app-promo";
import About from '../../app-about/app-about';
import Footer from "../../app-footer/app-footer";

export default class CoffeeItemPage extends Component {
    render() {
        const src = localStorage.getItem('src')
        return (
            <div className="coffee-item-page">
                <Promo 
                    bgUrl='url("img/bg/promo-our-coffee-bg.jpeg") center center/cover no-repeat'
                    title='Our Coffee'/>    
                <About 
                    src={src}
                    text='
                    Country: Brasil

                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    Price:  16.99$'
                    />
                <Footer/>
            </div>
        )
    }
}
