import {Utils} from '@core/utils';

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
				this.$root.on(listener, this[method].bind(this))
			} else {
				throw new Error(`Method ${method} not implemented in ${name}`)
			}
		})
	}

	removeDomListeners() {
	}
}
