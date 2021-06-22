import LazyLoad from 'vanilla-lazyload';
import canUseWebp from '../helpers/canUseWebp';

export default () => {
	if (canUseWebp() === false) {
		const lazyItems = document.querySelectorAll(
			'.lazy[data-bg-fallback], .lazy[data-src-fallback]',
		);

		lazyItems.forEach((item) => {
			if (item.hasAttribute('data-bg-fallback')) {
				const srcBgFallback = item.getAttribute('data-bg-fallback');
				item.setAttribute('data-bg', srcBgFallback);
			} else if (item.hasAttribute('data-src-fallback')) {
				const srcFallback = item.getAttribute('data-src-fallback');
				item.setAttribute('data-src', srcFallback);
			}
		});
	}
	// eslint-disable-next-line no-unused-vars
	const LazyLoadInstance = new LazyLoad({
		elements_selector: '.lazy',
	});
};
