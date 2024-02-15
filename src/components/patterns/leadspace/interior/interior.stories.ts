/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html } from 'lit';
import './interior';

export default {
  title: 'Patterns/Leadspace/Interior',
  component: `kd-leadspace-interior`,
  argTypes: {
    mediaPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description: 'Media on the left or right',
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
  eyebrowText: 'Lorem Ipsum',
  headlineText: 'Lorem ipsum dolor sit amet',
  buttonLabel: 'Button text',
  buttonLink: 'https://www.kyndryl.com',
};

export const leadspaceInterior = {
  args,
  render: (args: any) => {
    return html`
      <kd-leadspace-interior
        mediaPosition="${args.mediaPosition}"
        headlineText="${args.headlineText}"
        eyebrowtext="${args.eyebrowText}"
        buttonLabel="${args.buttonLabel}"
        buttonLink="${args.buttonLink}"
      >
        <div slot="media">
          <img
            src="https://s7d1.scene7.com/is/image/kyndryl/ls_windingriver_1x1?qlt=85"
            alt="image alt text"
            class="kd-layout__aspect-ratio--1x1 kd-layout__object-fit--cover"
          />
        </div>
        <div slot="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            facilisi pellentesque morbi molestie sed ut at sed ac. Semper tortor
            feugiat non sem eget libero. Risus semper facilisis convallis vitae.
          </p>
        </div>
      </kd-leadspace-interior>
    `;
  },
};
