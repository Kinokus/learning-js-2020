const CODES = {
	A: 65,
	Z: 90
}

function createCellStructure(content, indexX, indexY) {
	return `<div	class='cell'
								data-position-x="${indexX}"
								data-position-y="${indexY}"
					>
						${content}
					</div>`
}

function createColumnStructure(content, indexX) {
	const dataPosition = String.fromCharCode(CODES.A + indexX)
	return `
		<div class='column' data-type="resizable" data-position-x="${dataPosition}">
			${content}
			<div class="col-resize" data-resize="col"></div>
		</div>
	`
}

function createRowStructure(content, rowNumber) {
	const header = rowNumber ? rowNumber : ''
	const resize = rowNumber
		? '<div class="row-resize" data-resize="row"></div>'
		: ''
	return `
		<div class="row" data-type="resizable">
			<div class="row-info" >
				${header}
				${resize}
			</div>
			<div class="row-data">${content}</div>
		</div>
	`
}


function toColumnName(_, index) {
	return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
	// 65 -90
	const columnCount = CODES.Z - CODES.A + 1
	const rows = []

	const cols = new Array(columnCount)
		.fill('')
		.map(toColumnName)
		.map((v, i) => {
			return createColumnStructure(v, i)
		})
		.join('')

	rows.push(createRowStructure(cols, null))

	for (let index = 0; index < rowsCount; index++) {
		const cells = new Array(columnCount)
			.fill('')
			.map((v, i) => {
				const positionX = String.fromCharCode(CODES.A + i)
				return createCellStructure(v, positionX, index + 1)
			})
			.join('')

		rows.push(createRowStructure(cells, index + 1))
	}


	return rows.join('')
}
