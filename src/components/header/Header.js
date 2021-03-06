import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
	static className = 'excel__header'

	toHtml() {
		return `
				<label><input type="text" class="input" value="new table"></label>
        <div>
            <div class="button"><i class="material-icons">delete</i></div>
            <div class="button"><i class="material-icons">exit_to_app</i></div>
        </div>
		`
	}
}
