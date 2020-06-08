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
			this.$el.style = style
		}
	}

	get css() {
		return this.$el.style
	}

	findAll(selector) {
		return this.$el.querySelectorAll(selector)
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
