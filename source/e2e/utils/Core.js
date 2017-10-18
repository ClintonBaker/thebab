export default class ComponentHelper {
	defaultTimeout = 1000;

	constructor(Browser) {
		this.Browser = Browser;
	}

	generateSelectors(selectors: Object) {
		const { root, ...otherSelectors } = selectors;
		const elements = Object.entries(otherSelectors).reduce((final, [name, selector]) => {
			final[name] = `${root} ${selector}`;
			return final;
		}, {});

		return { root, ...elements };
	}

	checkIfElementContainsText(selector: string, text: string) {
		this.Browser.assert.containsText(selector, text);
	}

	waitForElementVisible(selector, timeout = this.defaultTimeout) {
		this.Browser.waitForElementVisible(selector, timeout);
	}
}
