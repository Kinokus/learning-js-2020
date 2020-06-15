import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
	constructor($root, options={}) {
		super($root, options.listeners)
		this.name = options.name || ''
		this.prepare()
	}

	// returns HTML template ?
	toHtml() {
		return ''
	}


	prepare() {}

	init() {
		this.initDomListeners()
	}

	destroy() {
		this.removeDomListeners()
	}
}

