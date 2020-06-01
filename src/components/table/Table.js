import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
	static className = 'excel__table'

	constructor($root) {
		super($root, {
			listeners: ['mousedown']
		});
	}

	toHtml() {
		return createTable(100)
	}

	onClick() {
		console.log('click')
	}

	onMousedown(event) {
		if (event.target.dataset.resize) {
			console.log('mousedown', event.target.getAttribute('data-resize'))
			console.log('mousedown', event.target.dataset)
		}
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
