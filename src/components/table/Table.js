import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
	name() {
		return 'Table Component'
	}

	toHtml() {
		return `<h1>this component called ${this.name()}</h1>`
	}
}
