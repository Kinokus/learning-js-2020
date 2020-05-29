export class Excel {
	constructor(selector, options) {
		this.$el = document.querySelector(selector)
		this.components = options.components || []
	}

	getRoot() {
		const $root = document.createElement('div')
		// $root.textContent = '123'
		// $root.style.fontSize = '15rem'
		this.components.forEach(Component => {
			const component = new Component()
			console.log(component);
			$root.insertAdjacentHTML('beforeend', component.toHtml())
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
