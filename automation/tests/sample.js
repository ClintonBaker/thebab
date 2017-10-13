const HomeSceneTest = (Browser) => {
	Browser.url('http://localhost:8080')
	Browser.pause(1500);
	Browser.waitForElementVisible('body', 1000);
	Browser.assert.containsText('.logoBox_Navbar > h2', 'thebab')
	Browser.end();
}


export default {
	HomeSceneTest
};
