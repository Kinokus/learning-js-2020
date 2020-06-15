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
			const $selected = this.selection.group

			if ($selected.length === 1 && event.shiftKey) {
				// todo: select by two targets into function
				this.selection.selectMultiple($target, $selected[0])
			} else if (!event.shiftKey && !event.ctrlKey) {
				document.onmouseup = e => {
					const $upTarget = $(e.target)
					this.selection.selectMultiple($target, $upTarget)
					// const sv = parseInt($target.data.posVertical)
					// const sh = parseInt($target.data.posHorizontal)
					// const ev = parseInt($upTarget.data.posVertical)
					// const eh = parseInt($upTarget.data.posHorizontal)
					//
					// this.selection.clear()
					//
					// console.log(sv, sh, ev, eh);
					// for (let x = sh; ;) {
					// 	for (let y = sv; ;) {
					// 		// console.log($(`[data-cell-id="${x}:${y}"]`));
					// 		this.selection.select($(`[data-cell-id="${x}:${y}"]`))
					// 		if (y === ev || sv === ev) {
					// 			break
					// 		}
					// 		if (sv < ev) {
					// 			y++
					// 		}
					// 		if (sv > ev) {
					// 			y--
					// 		}
					// 	}
					// 	if (x === eh || sh === eh) {
					// 		break
					// 	}
					// 	if (sh < eh) {
					// 		x++
					// 	}
					// 	if (sh > eh) {
					// 		x--
					// 	}
					// }


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
