import { AlternatingFeatureWithImage } from '../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-alternating-feature-with-image', () => {
  test('is defined', () => {
    const el = document.createElement('kd-alternating-feature-with-image');
    assert.instanceOf(el, AlternatingFeatureWithImage);
  });
});
