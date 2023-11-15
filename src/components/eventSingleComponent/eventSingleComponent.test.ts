import { EventSingleComponent } from '../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-event-single-component', () => {
  test('is defined', () => {
    const el = document.createElement('kd-event-single-component');
    assert.instanceOf(el, EventSingleComponent);
  });
});
