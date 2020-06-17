export function shoudResize(event) {
	return !!event.target.dataset.resize
}

export function isCell(event) {
	return event.target.dataset.type === 'cell'
}

export function range(start, end) {
	if (start > end) {
		[end, start] = [start, end]
	}
	return new Array(end - start + 1)
		.fill()
		.map((_, i) => start + i)
}

export function matrix(hRange, vRange) {
	return hRange.reduce(
		(acc, col) => {
			vRange.forEach(row => acc.push(`${col}:${row}`))
			return acc
		},
		[])
}
