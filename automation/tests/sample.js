import * as Scenes from '../helpers/scenes';

const Home_Scene = Browser => {
	const Home = new Scenes.Home(Browser);

	Browser.url('http://localhost:8080');

	Home.waitForAllElementsToLoad();
	Home.runAssertions('Navbar');
	// Browser.assert.containsText(Home.logo, 'thebab');

	Browser.end();
};

export default {
	Home_Scene
};
