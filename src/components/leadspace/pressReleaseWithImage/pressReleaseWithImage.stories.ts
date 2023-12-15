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


export const leadspacePressReleaseWithImage = {
  args: {
        title: html`<span slot="title">Kyndryl UK Named to Newsweek’s List of the Top 100 Most Loved Workplaces for 2023</span>`,
        eyebrow: html`<span slot="eyebrow"><kd-eyebrow>Awards and recognition</kd-eyebrow></span>`,
        media: html`<div slot="media">
          <img
            src="https://s7d1.scene7.com/is/image/kyndryl/ls_windingriver_16x9?qlt=85&amp;wid=1200&amp;ts=1650983065999&amp;dpr=off"
            alt="image alt text"
            class="kd-layout__aspect-ratio--16x9 kd-layout__object-fit--cover"
          />
        </div>`,
    socialmedia: html`
        <span slot="socialmedia">
            <kd-icon .icon=${twitterIcon}></kd-icon>
            <kd-icon .icon=${linkedinIcon}></kd-icon>
            <kd-icon .icon=${linkIcon}></kd-icon>
         </span>`,
    pagetype: html`<span slot="pagetype">Press Release</span>`,
    date: html`<span slot="date">Oct 04, 2023</span>`,
   }, 
  render: (args: any) => {
    return html`
      <kd-leadspace-press-release-with-image>
        ${args.media}
        ${args.eyebrow}
        ${args.title}
        ${args.socialmedia}
        ${args.pagetype}
        ${args.date}
      </kd-leadspace-press-release-with-image>
    `;
  },
};
