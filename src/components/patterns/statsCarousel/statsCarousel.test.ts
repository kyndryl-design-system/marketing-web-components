import { StatsCarousel, StatsCarouselSlide } from '../../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-stats-carousel', () => {
	test('is defined', () => {
		const el = document.createElement('kd-stats-carousel');
		assert.instanceOf(el, StatsCarousel);
	});
});

suite('kd-stats-carousel-slide', () => {
	test('is defined', () => {
		const el = document.createElement('kd-stats-carousel-slide');
		assert.instanceOf(el, StatsCarouselSlide);
	});
});
