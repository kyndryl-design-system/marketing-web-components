/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html } from 'lit';
import './statsGroup';

export default {
  title: 'Components/Stats Group',
  component: `kd-statsgroup`,
};

const args = {};

export const Template = {
  args,
  render: () => {
    return html`
      <kd-statsgroup>
        <div slot="text-one">
          <p class="kd-type--body-02 kd-type--weight-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            facilisi pellentesque morbi molestie sed ut at sed ac. Semper tortor
            feugiat non sem eget libero. Risus semper facilisis convallis vitae.
          </p>
        </div>

        <div slot="text-two">
          <p class="kd-type--body-02 kd-type--weight-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            facilisi pellentesque morbi molestie sed ut at sed ac. Semper tortor
            feugiat non sem eget libero. Risus semper facilisis convallis vitae.
          </p>
        </div>

        <div slot="text-three">
          <p class="kd-type--body-02 kd-type--weight-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            facilisi pellentesque morbi molestie sed ut at sed ac. Semper tortor
            feugiat non sem eget libero. Risus semper facilisis convallis vitae.
          </p>
        </div>
      </kd-statsgroup>
    `;
  },
};
