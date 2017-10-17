import Core from '@e2e/utils/Core';

export default class Home extends Core {
	waitForAllElementsToLoad() {
		this.waitForElementVisible(this.elements.root);
		this.waitForElementVisible(this.elements.title);
		this.waitForElementVisible(this.elements.searchInput);
	}

	elements = this.generateSelectors({
		root: '[e2e=Home]',
		title: '[e2e=title]',
		header: '[e2e=header]',
		searchInput: '[e2e=searchInput]',
		submitLink: '[e2e=submitLink]'
	});
}
