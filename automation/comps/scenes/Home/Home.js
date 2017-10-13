import selectors from './selectors';

export default class Home {
	constructor(browser) {
		this.browser = browser;
		this.selectors = selectors;
	}

	waitForHomeToLoad() {
		this.browser.waitForElementVisible(this.Navbar, 2000);
		this.browser.waitForElementVisible(this.logo, 2000);
	}

	Navbar = '[e2e=Navbar]';
	logo = '[e2e=logo';
}
