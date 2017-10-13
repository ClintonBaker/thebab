export default class ComponentHelper {
	defaultTimeout = 1000;

	constructor(Browser) {
		this.Browser = Browser;
	}

	runAssertions(element: string) {
		Object.keys(this)
			.filter(property => property[0] === '$')
			.map(a => {
				this[a]();
			});
	}

	checkIfElementContainsText(selector: string, text: string) {
		this.Browser.assert.containsText(selector, text);
	}

	waitForElementVisible(selector, timeout = this.defaultTimeout) {
		this.Browser.waitForElementVisible(selector, timeout);
	}
}
