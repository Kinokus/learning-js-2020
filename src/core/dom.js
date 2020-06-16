class Dom {
	constructor(selector) {
		this.$el = typeof selector === 'string'
			? document.querySelector(selector)
			: selector
	}

	html(content) {
		if (typeof content === 'string') {
			this.$el.innerHTML = content
			return this
		}
		return this.$el.outerHTML.trim()
	}

	clear() {
		this.html('')
		return this
	}

	on(eventType, callback) {
		this.$el.addEventListener(eventType, callback)
	}

	off(eventType, callback) {
		this.$el.removeEventListener(eventType, callback)
	}

	append(node) {
		if (node instanceof Dom) {
			node = node.$el
		}
		if (Element.prototype.append) {
			this.$el.append(node)
		} else {
			this.$el.appendChild(node)
		}
	}

	addClass(className) {
		this.$el.classList.add(className)
		return this
	}

	id(parse) {
		if (parse) {
			const id = this.id()
			return {
				row: id.split(':')[1],
				col: id.split(':')[0]
			}
		}
		return this.data.id
	}

	removeClass(className) {
		this.$el.classList.remove(className)
		return this
	}

	closest(selector) {
		return $(this.$el.closest(selector))
	}

	get data() {
		return this.$el.dataset
	}

	getCoords() {
		return this.$el.getBoundingClientRect()
	}


	// todo: setter/getter
	set width(options) {
		if (!options) {
			throw new Error('value not correct')
		}
		if (options.value) {
			const type = options.type ? options.type : 'px'
			this.$el.style.width = options.value + type
		}
		if (options.type) {
			// return this.$el.style.width
		}
		// return this.$el.getBoundingClientRect().width
	}

	get width() {
		return this.$el.getBoundingClientRect().width
	}

	get widthWithCss() {
		return this.$el.style.width
	}

	set height(options) {
		if (options.value) {
			const type = options.type ? options.type : 'px'
			this.$el.style.height = options.value + type
		}
	}

	get height() {
		return this.$el.getBoundingClientRect().height
	}

	get heightWithCss() {
		return this.$el.style.height
	}


	set css(style) {
		if (style) {
			Object
				.keys(style)
				.forEach(key => {
					this.$el.style[key] = style[key]
				})
		}
	}

	get css() {
		return this.$el.style
	}

	findAll(selector) {
		const foundCells = [...this.$el.querySelectorAll(selector)]
		return foundCells.map(e => $(e))
	}

	find(selector) {
		return $(this.$el.querySelector(selector))
	}
}

export function $(selector) {
	return new Dom(selector)
}

$.create = (tagname, classes = '') => {
	const el = document.createElement(tagname)
	if (classes) {
		el.classList.add(classes)
	}
	return $(el)
}


// todo : create $$
