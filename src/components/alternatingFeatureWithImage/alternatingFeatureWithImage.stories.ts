/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html } from 'lit';
import './alternatingFeatureWithImage';

export default {
  title: 'Components/Alternating Feature with Image',
  component: `kd-alternating-feature-with-image`,
  argTypes: {
    reverse: {
      control: { type: 'radio' },
      options: ['true', 'false'],
      description: 'Image followed by text',
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
  reverse: 'false',
  bleedMedia: 'false',
  eyebrowText: 'Lorem Ipsum',
  headlineText: 'Lorem ipsum dolor sit amet',
  buttonLabel: 'Button text',
  buttonLink: 'https://www.kyndryl.com',
};

export const alternatingFeatureWithImage = {
  args,
  render: (args: any) => {
    return html`
      <kd-alternating-feature-with-image
        reverse="${args.reverse}"
        bleedmedia="${args.bleedMedia}"
        headlineText="${args.headlineText}"
        eyebrowtext="${args.eyebrowText}"
        buttonLabel="${args.buttonLabel}"
        buttonLink="${args.buttonLink}"
      >
        <div slot="media">
          <img
            src="https://s7d1.scene7.com/is/image/kyndryl/ls_windingriver_16x9?qlt=85&amp;wid=1200&amp;ts=1650983065999&amp;dpr=off"
            alt="image alt text"
            class="kd-layout__aspect-ratio--16x9 kd-layout__object-fit--cover"
          />
        </div>
        <div slot="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            facilisi pellentesque morbi molestie sed ut at sed ac. Semper tortor
            feugiat non sem eget libero. Risus semper facilisis convallis vitae.
          </p>
        </div>
      </kd-alternating-feature-with-image>
    `;
  },
};
