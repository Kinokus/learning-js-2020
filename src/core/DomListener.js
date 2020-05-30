export class DomListener {
	constructor($root, listeners = []) {
		if (!$root) {
			throw new Error('no root provided ')
		}
		this.$root = $root
		this.listeners = listeners
	}

	initDomListeners() {

	}

	removeDomListeners() {}
}
