export class Utils {
	static capitalize(string) {
		if (typeof string!== 'string') {
			return ''
		}
		return string.charAt(0).toUpperCase() + string.slice(1)
	}

	static getMethodName(methodName) {
		return `on${this.capitalize(methodName)}`
	}
}

// can use pure funtions
