/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html } from 'lit';
import './image';

export default {
  title: 'Components/Image',
  component: `kd-image`,
  argTypes: {
    mediaPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description: 'Media on the left or right',
    },

    bleedMedia: {
      control: { type: 'radio' },
      options: ['true', 'false'],
      description: 'Bleed the media slot to the edge of the browser',
    },
    headlineText: {
      control: { type: 'text' },
      description: 'Headline Text (required)',
    },
    eyebrowText: {
      control: { type: 'text' },
      description: 'Eyebrow Text',
    },
    buttonLabel: {
      control: { type: 'text' },
      description: 'Button Label',
    },
    buttonLink: {
      control: { type: 'text' },
      description: 'Button Link',
    },
  },
};

const args = {
  mediaPosition: 'left',
  bleedMedia: 'false',
  date: '12:00 PM EST',
  location: 'Sydney',
  headlineText: 'Lorem ipsum dolor sit amet dsdsdsdsdssd',
  //   buttonLabel: 'Button text',
  buttonLink: 'https://www.kyndryl.com',
  eventSingleBaseComponent: 'yes',
};

export const alternatingFeatureWithImage = {
  args,
  render: (args: any) => {
    return html`
      <kd-image
        mediaPosition="${args.mediaPosition}"
        bleedmedia="${args.bleedMedia}"
        headlineText="${args.headlineText}"
        eyebrowtext="${args.eyebrowText}"
        buttonLabel="${args.buttonLabel}"
        buttonLink="${args.buttonLink}"
        eventSingleBaseComponent="${args.eventSingleBaseComponent}"
        date="${args.date}"
        location="${args.location}"
      >
        <div slot="media">
          <img
            src="https://s7d1.scene7.com/is/image/kyndryl/ls_windingriver_16x9?qlt=85&amp;wid=1200&amp;ts=1650983065999&amp;dpr=off"
            alt="image alt text"
            class="kd-layout__aspect-ratio--16x9 kd-layout__object-fit--cover"
          />
        </div>
        <div slot="text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu</p>
        </div>
      </kd-image>
    `;
  },
};
