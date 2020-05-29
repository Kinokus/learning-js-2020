// import {$} from '@core/dom';

export class Excel {
	constructor(selector, options) {
		this.$el = document.querySelector(selector)
		this.components = options.components || []
	}

	getRoot() {
		// $.create('div', 'excel')

		const $root = document.createElement('div')
		$root.classList.add('excel')
		this.components.forEach(Component => {
			const $el = document.createElement('div')
			$el.classList.add(Component.className)
			const component = new Component($el)
			$el.innerHTML = component.toHtml()
			$root.append($el)
			// $root.insertAdjacentHTML('beforeend', component.toHtml())
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
	}
}
