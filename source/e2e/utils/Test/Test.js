import chai from 'chai';
const should = chai.should();
const expect = chai.expect;

class Test {
	constructor(details, test) {
		return (Browser) => {
			return test({ Browser, expect, should })
		}
	}
}

/*
export default new Test({
	title: '<Home/>',
}, ({
	Browser,
	expect,
	should
}) => {
	const Home = Scenes.Home(Browser, expect);
	const Navbar = Comps.Navbar(Browser, expect);
	Browser.url('http://localhost:8080');

	Home.render();
	Home.performSearch();
	Home.clickSubmitLink();

	Browser.assert.urlContains('/submit');
	Browser.end();
});


*/
