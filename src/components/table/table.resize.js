import {$} from '@core/dom';

export function resizeHandler($root, event) {
	const $resizer = $(event.target)
	$resizer.addClass('active')
	const $parent = $resizer.closest('[data-type="resizable"]')
	const coords = $parent.getCoords()
	const dataPositionX = $parent.data.col
	let columnCells = null
	let delta
	let value


	switch (event.target.dataset.resize) {
	case 'col': {
		document.onmousemove = e => {
			delta = e.pageX - coords.right
			value = coords.width + delta
			$resizer.css = {right: `${-delta}px`}
		}
		document.onmouseup = e => {
			const columnCellsSelector
				= `[data-col="${dataPositionX}"][data-type="cell"]`
			columnCells = $root.findAll(columnCellsSelector)
			$parent.css = {width: `${value}px`}
			columnCells.forEach(columnCell => {
				columnCell.css = {width: `${value}px`}
			})
			$resizer.removeClass('active')
			$resizer.css = {right: 0}
			document.onmousemove = null
			document.onmouseup = null
		}
		break
	}
	case 'row': {
		document.onmousemove = e => {
			delta = e.pageY - coords.bottom
			value = coords.height + delta
			$resizer.css = {bottom: `${-delta}px`}
		}
		document.onmouseup = e => {
			$parent.css = {height: `${value}px`}
			$resizer.removeClass('active')
			$resizer.css = {bottom: 0}
			document.onmousemove = null
			document.onmouseup = null
		}
		break
	}
	default: {
		throw new Error('something went wrong')
	}
	}
}
