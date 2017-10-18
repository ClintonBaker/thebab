import Core from '@e2e/utils/Core';

export default class Navbar extends Core {
	waitForAllElementsToLoad() {
		this.waitForElementVisible(this.elements.root);
		this.waitForElementVisible(this.elements.logoBox);
		this.waitForElementVisible(this.elements.logo);
	}

	elements = this.generateSelectors({
		root: '[e2e=Navbar]',
		logo: `[class$=logo]`,
		logoBox: `[class$=logoBox]`,
		UserBox: `[class$=UserBox]`
	});
}
