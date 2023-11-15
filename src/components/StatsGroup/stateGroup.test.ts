import { KdStatsGroup } from '../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-statsgroup', () => {
  test('is defined', () => {
    const el = document.createElement('kd-statsgroup');
    assert.instanceOf(el, KdStatsGroup);
  });
});
