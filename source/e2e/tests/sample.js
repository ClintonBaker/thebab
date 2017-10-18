import * as Scenes from '@scenes/e2e';
import * as Comps from '@comps/e2e';

export default (Browser) => {
	const { expect, assert } = Browser;
	const Home = Scenes.Home(Browser);
	const Navbar = Comps.Navbar(Browser);

	Browser.url('http://localhost:8080');

	Home.render();
	Home.performSearch();
	Home.clickSubmitLink();
	Browser.pause(2000);
	assert.urlContains('/submit');
	Browser.end();
};
