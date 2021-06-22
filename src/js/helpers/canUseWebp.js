export default () => {
	const el = document.createElement('canvas');
	if (el.getContext && el.getContext('2d')) {
		return el.toDataURL('img/webp').indexOf('data:img/webp') === 0;
	}
	return false;
};
