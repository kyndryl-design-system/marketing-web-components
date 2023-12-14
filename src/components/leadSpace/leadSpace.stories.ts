/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html } from 'lit';
import './leadSpace';

export default {
  title: 'Components/Lead Space',
  component: `kd-leadspace`,
};

const args = {};

export const Template = {
  args,
  render: () => {
    return html` <kd-leadspace> </kd-leadspace> `;
  },
};
