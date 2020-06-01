import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
	static className = 'excel__table'

	constructor($root) {
		super($root, {
			listeners: ['mousedown', 'mouseup']
		});
	}

	toHtml() {
		return createTable(100)
	}

	onClick() {
		console.log('click')
	}

	onMousedown(event) {
		console.log('mousedown', event.target)
		// todo: add mousemove
	}

	onMouseup(event) {
		console.log('mouseup', event.target)
		// todo: remove mousemove
	}

	onMousemove() {
		console.log('mousemove')
	}
}
