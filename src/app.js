'use strict';

import widget_css from './app.scss';
import Widget from './widget';

// For multiple forms - styles loaded only once
let styles_loaded = false;

module.exports = {
    init: (element_id, params) => {
    	if(!styles_loaded) {
			let tpo_css  = document.createElement('link');
	        tpo_css.href = 'https://tm-ss.ru/app.css';
	        tpo_css.rel  = 'stylesheet';
	        let element  = document.getElementById(element_id);
	        element.parentNode.insertBefore(tpo_css, element);
	        styles_loaded = true;
        }
    	let TPOWidget = new Widget(element_id, params);
    }
}