import {$} from '@core/dom';

export class TableSelection {
	static className = 'selected'

	constructor() {
		this.group = []
	}

	selectMultiple($el1, $el2) {
		const sv = parseInt($el1.data.posVertical)
		const sh = parseInt($el1.data.posHorizontal)
		const ev = parseInt($el2.data.posVertical)
		const eh = parseInt($el2.data.posHorizontal)
		this.clear()
		console.log(sv, sh, ev, eh);
		for (let x = sh; ;) {
			for (let y = sv; ;) {
				// console.log($(`[data-cell-id="${x}:${y}"]`));
				this.select($(`[data-cell-id="${x}:${y}"]`))
				if (y === ev || sv === ev) {
					break
				}
				if (sv < ev) {
					y++
				}
				if (sv > ev) {
					y--
				}
			}
			if (x === eh || sh === eh) {
				break
			}
			if (sh < eh) {
				x++
			}
			if (sh > eh) {
				x--
			}
		}
	}

	select($el, clear = false) {
		if (clear) {
			this.clear()
		}
		this.group.push($el)
		$el.addClass(TableSelection.className)
	}

	clear() {
		this.group.forEach(e=>e.removeClass(TableSelection.className))
		this.group = []
	}

	selectGroup() {

	}
}
