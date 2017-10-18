export default (selectors: Object) => {
	const { root, ...otherSelectors } = selectors;
	const elements = Object.entries(otherSelectors).reduce((final, [name, selector]) => {
		final[name] = `${root} ${selector}`;
		return final;
	}, {});

	return { root, ...elements };
}
