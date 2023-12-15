import { IntroPrimary } from '../../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-intro-primary', () => {
	test('is defined', () => {
		const el = document.createElement('kd-intro-primary');
		assert.instanceOf(el, IntroPrimary);
	});
});
