'use strict';

import widget_css from './app.scss';
import style_css from './style.scss';
import Widget from './widget';

module.exports = {
    init: (element_id, params) => {
    	let TPOWidget = new Widget(element_id, params);
		let styles = document.createElement('link');
        styles.href = 'http://aviasales.local/app.css';
        let element = document.getElementById(element_id);
        element.parentNode.insertBefore(styles, element);
    }
}