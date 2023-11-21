import { LeadspacePressReleaseWithImage } from '../../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-press-release-with-image', () => {
  test('is defined', () => {
    const el = document.createElement('kd-leadspace-press-release-with-image');
    assert.instanceOf(el, LeadspacePressReleaseWithImage);
  });
});
