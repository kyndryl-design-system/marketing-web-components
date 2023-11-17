import { PersistentCta } from '../../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-persistent-cta', () => {
	test('is defined', () => {
		const el = document.createElement('kd-persistent-cta');
		assert.instanceOf(el, PersistentCta);
	});
});
