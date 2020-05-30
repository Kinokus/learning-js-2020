import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
	static className = 'excel__formula'

	constructor($root) {
		super($root, {
			name: 'Formula',
			listeners: ['input', 'click']
		});
	}


	toHtml() {
		return `
			<div class="info button"><i class="material-icons">functions</i></div>
      <div class="input" contenteditable spellcheck="false"></div>
		`
	}


	onInput(event) {
		console.log('formula: onInput', event)
	}
}
