const CODES = {
	A: 65,
	Z: 90
}

function toCell(indexY) {
	return (content, indexX) => {
		const positionX = String.fromCharCode(CODES.A + indexX)
		return `<div	class='cell'
								data-col="${positionX}"
								data-row="${indexY + 1}"
								data-pos-vertical = "${indexY}"
								data-pos-horizontal = "${indexX}"
								data-cell-name = "${positionX}${indexY + 1}"
								data-cell-id = "${indexX}:${indexY}"
								data-type = "cell"
								data-selectable = "${true}"
								data-type="cell"
					>
						${content}
					</div>`
	}
}

// function createCellStructure(content, indexX, indexY) {
// 	return `<div	class='cell'
// 								data-col="${indexX}"
// 								data-row="${indexY}"
// 								data-type="cell"
// 					>
// 						${content}
// 					</div>`
// }

function createColumnStructure(content, indexX) {
	const dataPosition = String.fromCharCode(CODES.A + indexX)
	return `
		<div class='column' data-type="resizable" data-col="${dataPosition}">
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
			.map(toCell(index))
			.join('')

		rows.push(createRowStructure(cells, index + 1))
	}


	return rows.join('')
}
