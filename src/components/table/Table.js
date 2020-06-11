import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shoudResize} from '@/components/table/table.functions';

export class Table extends ExcelComponent {
	static className = 'excel__table'
	currentResizer;

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
		if (shoudResize(event)) {
			resizeHandler(this.$root, event)
		}
	}

	onMouseup(event) {
		// todo: remove mousemove
	}

	onMousemove() {
		console.log('mousemove')
	}
}
