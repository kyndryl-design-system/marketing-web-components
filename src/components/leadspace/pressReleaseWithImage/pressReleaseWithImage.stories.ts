/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html } from 'lit';
import './pressReleaseWithImage';
import twitterIcon from '@carbon/icons/es/logo--twitter/24';
import linkedinIcon from '@carbon/icons/es/logo--linkedin/24';
import linkIcon from '@carbon/icons/es/link/24';

export default {
  title: 'Components/Leadspace/Press Release with Image',
  component: `kd-leadspace-press-release-with-image`,
  argTypes: {},
};

const args = {};

export const leadspacePressReleaseWithImage = {
  args,
  render: (args: any) => {
    return html`
      <kd-leadspace-press-release-with-image>
        <div slot="media">
          <img
            src="https://s7d1.scene7.com/is/image/kyndryl/ls_windingriver_16x9?qlt=85&amp;wid=1200&amp;ts=1650983065999&amp;dpr=off"
            alt="image alt text"
            class="kd-layout__aspect-ratio--16x9 kd-layout__object-fit--cover"
          />
        </div>
        <span slot="title">
          Kyndryl UK Named to Newsweek’s List of the Top 100 Most Loved
          Workplaces for 2023
        </span>
        <span slot="eyebrow"
          ><kd-eyebrow>Awards and recognition</kd-eyebrow></span
        >
        <span slot="pagetype">Press Release</span>
        <span slot="date">Oct 04, 2023</span>
        <span slot="socialmedia"
          ><kd-icon slot="icon" .icon=${twitterIcon}></kd-icon>
          <kd-icon slot="icon" .icon=${linkedinIcon}></kd-icon>
          <kd-icon slot="icon" .icon=${linkIcon}></kd-icon>
        </span>
      </kd-leadspace-press-release-with-image>
    `;
  },
};
