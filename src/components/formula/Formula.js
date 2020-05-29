import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
	static className = 'excel__formula'

	toHtml() {
		return `
			<div class="info button"><i class="material-icons">functions</i></div>
      <div class="input" contenteditable spellcheck="false"></div>
		`
	}
}
