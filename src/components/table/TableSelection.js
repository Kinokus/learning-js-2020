import {$} from '@core/dom';
import {matrix, range} from '@/components/table/table.functions';

export class TableSelection {
	static className = 'selected'

	constructor() {
		this.group = []
		this.current = null
	}

	selectMultiple($el1, $el2, clear = true) {
		if (clear) {
			this.clear()
		}
		$el2 = $el2 ? $el2 : this.current
		const vRange
			= range($el1.id(true).row, $el2.id(true).row)
		const hRange
			= range($el1.id(true).col, $el2.id(true).col)

		const cellsIds = matrix(hRange, vRange)
		this.clear()
		cellsIds.forEach((cellId) => {
			this.select($(`[data-cell-id="${cellId}"]`))
		})
	}

	select($el, clear = false) {
		if (clear) {
			this.clear()
		}
		this.group.push($el)
		this.current = $el
		$el.addClass(TableSelection.className)
	}

	clear() {
		this.group.forEach(e => e.removeClass(TableSelection.className))
		this.group = []
		this.current = null
	}

	selectGroup() {

	}
}
