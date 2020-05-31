import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
	static className = 'excel__table'
	toHtml() {
		return createTable(100)
		// return `
		//     <div class="row">
		//         <div class="row-info"></div>
		//         <div class="row-data">
		//             <div class="column">A</div>
		//             <div class="column">B</div>
		//             <div class="column">C</div>
		//         </div>
		//     </div>
		//     <div class="row">
		//         <div class="row-info"> 1</div>
		//         <div class="row-data">
		//             <div class="cell" contenteditable>a 100</div>
		//             <div class="cell" contenteditable>b 200</div>
		//             <div class="cell" contenteditable>c 300</div>
		//         </div>
		//     </div>
		//     <div class="row">
		//         <div class="row-info"> 2</div>
		//         <div class="row-data">
		//             <div class="cell" contenteditable>a 200</div>
		//             <div class="cell selected" contenteditable>b 400</div>
		//             <div class="cell" contenteditable>c 600</div>
		//         </div>
		//     </div>
		// `
	}
}
