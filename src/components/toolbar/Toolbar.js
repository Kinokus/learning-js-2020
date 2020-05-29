import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
	name() {
		return 'Toolbar Component'
	}

	toHtml() {
		return `<h1>this component called ${this.name()}</h1>`
	}
}
