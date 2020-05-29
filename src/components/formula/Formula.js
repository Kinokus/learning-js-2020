import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
	name() {
		return 'Formula Component'
	}

	toHtml() {
		return `<h1>this component called ${this.name()}</h1>`
	}
}
