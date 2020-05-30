import {$} from '@core/dom';

export class Excel {
	constructor(selector, options) {
		this.$el = $(selector)
		this.components = options.components || []
	}

	getRoot() {
		const $root = $.create('div', 'excel')
		$root.addClass('excel')
		this.components = this.components.map(Component => {
			const $el = $.create('div', Component.className)
			const component = new Component($el)
			$el.html(component.toHtml())
			$root.append($el)
			return component
		})
		return $root
	}

	render() {
		// console.log(this.$el)
		// this.$el.insertAdjacentElement('afterbegin', '<h1>123</h1>')
		// const node = document.createElement('h1')
		// node.textContent = 'tttst'
		// this.$el.append(node)
		this.$el.append(this.getRoot())
		this.components.forEach(component => component.init())
	}
}
