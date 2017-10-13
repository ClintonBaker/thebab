const Home_Scene = (Browser) => {
	console.log(111)
	Browser.url('http://localhost:8080')
	console.log(111)
	Browser.pause(1500);
	console.log(111)
	Browser.waitForElementVisible('body', 1000);
	Browser.assert.containsText('.logoBox_Navbar > h2', 'thebab')
	Browser.end();
}

export default {
	Home_Scene
};
