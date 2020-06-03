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
		if (event.target.dataset) {
			console.log(event.target.dataset);
		}
		if (event.target.dataset.resize) {
			const $resizer = $(event.target)
			const $parent = $resizer.closest('[data-type="resizable"]')
			const coords = $parent.getCoords()
			console.log($parent);


			const dataPositionX = $parent.$el.getAttribute('data-position-x')
			const columnCellsSelector
				= `[data-position-x="${dataPositionX}"][data-type="cell"]`
			const columnCells = document.querySelectorAll(columnCellsSelector);
			console.log(columnCells);


			switch (event.target.dataset.resize) {
			case 'col': {
				document.onmousemove = e => {
					const delta = e.pageX - coords.right
					const newWidth = coords.width + delta
					$parent.width({value: newWidth, type: 'px'})

					// todo: use $$
					columnCells.forEach(columnCell => {
						const $cell = $(columnCell)
						$cell.width({value: newWidth, type: 'px'})
					})


					// todo: resize whole column, not only header
				}
				break
			}
			case 'row': {
				document.onmousemove = e => {
					const delta = e.pageY - coords.bottom
					const newHeigth = coords.height + delta
					$parent.height({value: newHeigth, type: 'px'})
				}
				break
			}
			default: {
				throw new Error('something went wrong')
			}
			}

			document.onmouseup = e => {
				document.onmousemove = null
			}


			// todo: move to class
			// const column = $(event.target.closest('.column'))
			// $target.on('mousemove', (event) => {
			// 	const currentWidth = column.$el.getBoundingClientRect().width
			// 	column.$el.style.width = currentWidth + event.movementX + 'px'
			// })
			//
			// column.on('mouseup', (event) => {
			// 	$target.off('mousemove')
			// })
			// $target.on('mouseup', (event) => {
			// 	$target.off('mousemove')
			// })
		}
	}

	onMouseup(event) {
		// todo: remove mousemove
	}

	onMousemove() {
		console.log('mousemove')
	}
}
