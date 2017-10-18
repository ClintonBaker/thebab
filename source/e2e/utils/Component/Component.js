export default class Component {
	defaultTimeout = 1000;

	constructor(Browser) {
		this.Browser = Browser;
	}

	waitForAllElementsToLoad(selectors: string[]) {
		selectors.forEach(selector => {
			this.Browser.waitForElementVisible(selector, this.defaultTimeout);
		});
	}

	checkIfElementContainsText(selector: string, text: string) {
		this.Browser.assert.containsText(selector, text);
	}

	waitForElementVisible(selector, timeout = this.defaultTimeout) {
		this.Browser.waitForElementVisible(selector, timeout);
	}

	expectValueOf(selector: string) {
		const self = this;
		return {
			toEqual(value: string) {
				self.Browser.expect.element(selector).value.to.equal(value);
			}
		}
	}

	setValueOf(selector: string) {
		const self = this;
		return {
			to(value: string) {
				self.Browser.setValue(selector, value);
			}
		}
	}
}
