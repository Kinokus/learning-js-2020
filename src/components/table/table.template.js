const CODES = {
	A: 65,
	Z: 90
}

function createCellStructure(content) {
	return `<div class='cell'>${content}</div>`
}

function createColumnStructure(content) {
	return `<div class='column'>${content}</div>`
}

function createRowStructure(content, rowNumber = '') {
	return `
		<div class="row">
			<div class="row-info">${rowNumber}</div>
			<div class="row-data">${content}</div>
		</div>
	`
}


function toColumnName(_, index) {
	return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
	// 65 -90
	const columnCount = CODES.Z - CODES.A
	const rows = []

	const cols = new Array(columnCount + 1)
		.fill('')
		.map(toColumnName)
		.map(createColumnStructure)
		.join('')

	rows.push(createRowStructure(cols))

	for (let index = 0; index < rowsCount; index++) {
		const cells = new Array(columnCount + 1)
			.fill('')
			.map(createCellStructure)
			.join('')

		rows.push(createRowStructure(cells, index + 1))
	}

	// rows.push(createRowStructure())

	return rows.join('')
}
