import ComponentHelper from '../../ComponentHelper';

export default class Home extends ComponentHelper {
	waitForAllElementsToLoad() {
		this.waitForElementVisible(this.Navbar, 2000);
		this.waitForElementVisible(this.logoBox, 2000);
		this.waitForElementVisible(this.logo, 2000);
	}

	$Navbar = () => {
		this.checkIfElementContainsText(this.Navbar, 'thebab');
	};

	$logo = () => {
		this.checkIfElementContainsText(this.logo, 'thebab');
	};

	Navbar = `[e2e=Navbar]`;
	logo = `${this.Navbar} [class$=logo]`;
	logoBox = `${this.Navbar} [class$=logoBox]`;
	header = `${this.Navbar} [class$=header]`;
	loginBox = `${this.Navbar} [class$=loginBox]`;
}

const selector = () => {};
