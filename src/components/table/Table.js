import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shoudResize, isCell} from '@/components/table/table.functions';
import {TableSelection} from '@/components/table/TableSelection';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
	static className = 'excel__table'
	currentResizer;

	constructor($root) {
		super($root, {
			listeners: ['mousedown', 'mouseup', 'click', 'keydown']
		});
	}

	toHtml() {
		return createTable(100)
	}

	prepare() {
		super.prepare()
		this.selection = new TableSelection()
	}

	onClick(event) {

	}


	init() {
		super.init()
		const cell = this.$root.find('[data-cell-id = "1:1"]')
		this.selection.select(cell)
	}

	onMousedown(event) {
		if (shoudResize(event)) {
			resizeHandler(this.$root, event)
		}
		if (isCell(event)) {
			const $target = $(event.target)
			const $selected = this.selection.current

			if (event.shiftKey) {
				this.selection.selectMultiple($target, $selected)
			} else if (!event.shiftKey && !event.ctrlKey) {
				document.onmouseup = e => {
					const $upTarget = $(e.target)
					this.selection.selectMultiple($target, $upTarget)
					document.onmouseup = null
				}
			} else {
				this.selection.select($(event.target), !event.ctrlKey)
			}
		}
	}

	onKeydown(event) {

	}

	onMouseup(event) {

	}

	onMousemove() {

	}
}
