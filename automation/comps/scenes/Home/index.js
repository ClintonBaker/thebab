export default class Home {
	constructor(browser) {
		this.browser = browser;
	}

	waitForHomeToLoad() {
		this.browser.waitForElementVisible('.Navbar', 2000);
	}
}
