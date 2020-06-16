export function shoudResize(event) {
	return !!event.target.dataset.resize
}

export function isCell(event) {
	return event.target.dataset.type === 'cell'
}

export function range(start, end) {
	if (start > end) {
		// start = start + end
		// end = start - end

		[end, start] = [start, end]
	}
	return new Array(end - start + 1)
		.fill()
		.map((_, i) => start + i)
}

