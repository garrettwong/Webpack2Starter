import 'bootstrap/dist/css/bootstrap.css';
// npm install style-loader css-loader node-sass sass-loader --save-dev
// "css-loader": "^0.28.1",
// "node-sass": "^4.5.2",
// "sass-loader": "^6.0.5",
// "style-loader": "^0.17.0",
import './home.scss';


import * as $ from 'jquery';
import 'bootstrap';

import PageLoad from './page-load';
import Car from './cars/car';



class Home {
    constructor() {

        // document ready wrapper
        (new PageLoad()).init(function () {

            let car = new Car();
            console.log(car);
        });
    }
}

// initialize
let home = new Home();