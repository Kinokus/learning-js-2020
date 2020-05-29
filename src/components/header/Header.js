import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
	// name = 'Header Component'
	name() {
		return 'Header Component'
	}

	toHtml() {
		return `<h1>this component called ${this.name()}</h1>`
	}
}
