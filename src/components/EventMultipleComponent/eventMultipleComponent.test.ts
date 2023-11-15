import { KdEventMultipleComponent } from '../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-event-multiple-component', () => {
  test('is defined', () => {
    const el = document.createElement('kd-event-multiple-component');
    assert.instanceOf(el, KdEventMultipleComponent);
  });
});
