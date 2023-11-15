import { EventSingleBase } from '../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-event-single-base', () => {
  test('is defined', () => {
    const el = document.createElement('kd-event-single-base');
    assert.instanceOf(el, EventSingleBase);
  });
});
