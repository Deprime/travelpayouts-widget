import Pikaday from 'pikaday';

class Widget {
	constructor (element_id, options = {}) {
		this.bg_color   = options.bg_color ? options.bg_color : '#4a90e2';
		this.font_color = options.font_color ? options.font_color : '#fff';
		this.title      = options.title ? options.title : 'Where does it come from? Why do we use it?';
		this.info_text  = options.info_text ? options.info_text : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
		
		this.depart_placeholder = options.depart_placeholder ? options.depart_placeholder : 'Departure date';
		this.return_placeholder = options.return_placeholder ? options.return_placeholder : 'Return date';

		this.btn_text   = options.btn_text ? options.btn_text : 'SEARCH';
		this.btn_bg_color = options.btn_bg_color ? options.btn_bg_color : '#f5a623';
		this.element    = document.getElementById(element_id);
		this.render();
	}

	defineSize () {
		let width = this.element.offsetWidth;
		let size = 'lg';
		if (width <= 1024) size = 'md'; 
		if (width <= 768) size = 'sm'; 
		if (width <= 440) size = 'xs'; 
  		return size;
	}

	render () {
		let size 	   = this.defineSize();
		let bg_color   = this.bg_color;
		let font_color = this.font_color;
		let title 	   = this.title;
		let info_text  = this.info_text;
		let btn_text   = this.btn_text;
		let btn_bg_color = this.btn_bg_color;
		let depart_placeholder = this.depart_placeholder;
		let return_placeholder = this.return_placeholder;

		let template = `<div class="tpo-widget tpo-widget-${size}" style="background-color: ${bg_color}; color: ${font_color}">
			<form class="tpo-form">
				<h2 class="tpo-title">${title}</h2>
					<div class="tpo-group"><div class="tpo-info"><p>${info_text}</p></div>
						<div class="tpo-date-range">
							<div class="tpo-date-range_cell"><input type="text" name="depart_date" id="depart_date" required placeholder="${depart_placeholder}" class="tpo-input"></div>
							<div class="tpo-date-range_cell"><input type="text" name="return_date" id="return_date" required placeholder="${return_placeholder}" class="tpo-input"></div>
						</div>
						<div class="tpo-submit"><button type="submit" class="tpo-submit_btn" style="background-color: ${btn_bg_color}">${btn_text}</button></div>
					</div>
				</form>
			</div>`;
		this.element.innerHTML = template;
		this.afterRender();
	}

	afterRender () {
    	let picker_depart = new Pikaday({ field: this.element.querySelector('#depart_date'), format: 'DD.MM.YYYY', });
    	let picker_return = new Pikaday({ field: this.element.querySelector('#return_date'), format: 'DD.MM.YYYY', });
	}
}

module.exports = Widget;