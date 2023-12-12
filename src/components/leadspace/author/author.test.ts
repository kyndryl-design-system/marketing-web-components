import { LeadspaceAuthor } from '../../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-leadspace-author', () => {
  test('is defined', () => {
    const el = document.createElement('kd-leadspace-author');
    assert.instanceOf(el, LeadspaceAuthor);
  });
});