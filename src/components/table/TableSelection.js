import {$} from '@core/dom';
import {range} from '@/components/table/table.functions';

export class TableSelection {
	static className = 'selected'

	constructor() {
		this.group = []
		this.current = null
	}

	selectMultiple($el1, $el2) {
		$el2 = $el2 ? $el2 : this.current
		const vRange
			= range($el1.id(true).row, $el2.id(true).row)
		const hRange
			= range($el1.id(true).col, $el2.id(true).col)
		this.clear()
		for (let x = hRange[0]; x <= hRange[hRange.length - 1]; x++) {
			for (let y = vRange[0]; y <= vRange[vRange.length - 1]; y++) {
				this.select($(`[data-cell-id="${x}:${y}"]`))
			}
		}
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
