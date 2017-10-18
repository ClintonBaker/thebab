import * as Scenes from '@scenes/e2e';
import * as Comps from '@comps/e2e';

const Home_Scene = Browser => {
	const Home = new Scenes.Home(Browser);
	const Navbar = new Comps.Navbar(Browser);

	Browser.url('http://localhost:8080');

	Home.waitForAllElementsToLoad();
	Navbar.waitForAllElementsToLoad();

	Browser.end();
};

export default {
	Home_Scene
};
