export default () => {
	const conditions = {
		first:
			navigator.userAgent.indexOf('Firefox') != -1 &&
			parseFloat(
				navigator.userAgent.substring(
					navigator.userAgent.indexOf('Firefox') + 8,
				),
			) >= 3.6,

		second:
			navigator.userAgent.indexOf('Chrome') != -1 &&
			parseFloat(
				navigator.userAgent
					.substring(navigator.userAgent.indexOf('Chrome') + 7)
					.split(' ')[0],
			) >= 15,

		third:
			navigator.userAgent.indexOf('Safari') != -1 &&
			navigator.userAgent.indexOf('Version') != -1 &&
			parseFloat(
				navigator.userAgent
					.substring(navigator.userAgent.indexOf('Version') + 8)
					.split(' ')[0],
			) >= 5,
	};

	if (!conditions.first && !conditions.second && !conditions.third) {
		return true;
	}
	return false;
};
