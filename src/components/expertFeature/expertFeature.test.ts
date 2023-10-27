import { ExpertFeature } from '../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-expert-feature', () => {
  test('is defined', () => {
    const el = document.createElement('kd-expert-feature');
    assert.instanceOf(el, ExpertFeature);
  });
});
