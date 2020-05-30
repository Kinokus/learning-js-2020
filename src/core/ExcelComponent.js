import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
	constructor($root, options={}) {
		super($root, options.listeners);
	}

	// returns HTML template ?
	toHtml() {
		return ''
	}

	init() {
		this.initDomListeners()
	}
}

