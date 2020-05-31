import {Utils} from '@core/Utils';

export class DomListener {
	constructor($root, listeners = []) {
		if (!$root) {
			throw new Error('no root provided ')
		}
		this.$root = $root
		this.listeners = listeners
	}

	initDomListeners() {
		this.listeners.forEach(listener => {
			const method = Utils.getMethodName(listener)
			const name = this.name || '' // todo: set default name in component
			if (this[method]) {
				this[method] = this[method].bind(this)
				this.$root.on(listener, this[method])
			} else {
				throw new Error(`Method ${method} not implemented in ${name}`)
			}
		})
	}

	removeDomListeners() {
		this.listeners.forEach(listener => {
			const method = Utils.getMethodName(listener)
			this.$root.off(listener, this[method])
		})
	}
}
