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
