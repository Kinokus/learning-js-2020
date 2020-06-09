import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';

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
		if (event.target.dataset.resize) {
			const $resizer = $(event.target)
			const $parent = $resizer.closest('[data-type="resizable"]')
			const coords = $parent.getCoords()
			const dataPositionX = $parent.data.positionX
			let columnCells = null
			let widthObject = null
			switch (event.target.dataset.resize) {
			case 'col': {
				const columnCellsSelector
					= `[data-position-x="${dataPositionX}"][data-type="cell"]`
				columnCells = this.$root.findAll(columnCellsSelector)
				widthObject = {}
				document.onmousemove = e => {
					const delta = e.pageX - coords.right
					const newWidth = coords.width + delta
					widthObject.value = newWidth
					widthObject.type = 'px'
					$parent.width = widthObject
				}
				document.onmouseup = e => {
					if (columnCells) {
						columnCells.forEach(columnCell => {
							const $cell = $(columnCell)
							$cell.width = widthObject
						})
					}
					document.onmousemove = null
				}
				break
			}
			case 'row': {
				document.onmousemove = e => {
					const delta = e.pageY - coords.bottom
					const newHeigth = coords.height + delta
					// $parent.height = {value: newHeigth, type: 'px'}
					$parent.css = {height: `${newHeigth}px`}
				}
				document.onmouseup = e => {
					document.onmousemove = null
				}
				break
			}
			default: {
				throw new Error('something went wrong')
			}
			}
		}
	}

	onMouseup(event) {
		// todo: remove mousemove
	}

	onMousemove() {
		console.log('mousemove')
	}
}
