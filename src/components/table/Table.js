import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shoudResize} from '@/components/table/table.functions';
import {TableSelection} from '@/components/table/TableSelection';

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

	}


	init() {
		super.init()
		this.selection = new TableSelection()
	}

	onMousedown(event) {
		if (shoudResize(event)) {
			resizeHandler(this.$root, event)
		}
	}

	onMouseup(event) {

	}

	onMousemove() {

	}
}
