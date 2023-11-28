/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html } from 'lit';
import './eventSingleComponent';

export default {
  title: 'Components/EventSingleComponent',
  component: 'kd-event-single-component',
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
  date: 'Nov 29',
  time: '12:00 PM EST',
  location: 'Sydney',
  headlineText: 'Lorem ipsum dolor sit amet image story book',
  //   buttonLabel: 'Button text',
  buttonLink: 'https://www.kyndryl.com',
  eventSingleBaseComponent: 'yes',
};

export const ImageDateandTime = {
  args,
  render: (args: any) => {
    return html`
      <kd-event-single-component
        mediaPosition="${args.mediaPosition}"
        bleedmedia="${args.bleedMedia}"
        eyebrowtext="${args.eyebrowText}"
        buttonLabel="${args.buttonLabel}"
        buttonLink="${args.buttonLink}"
        date="${args.date}"
        time="${args.time}"
        location="${args.location}"
        headlineText="${args.headlineText}"
        eventSingleBaseComponent="${args.eventSingleBaseComponent}"
      >
        <div slot="media">
          <img
            src="https://s7d1.scene7.com/is/image/kyndryl/diverse-board-meeting?qlt=85&wid=1600&dpr=off"
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
      </kd-event-single-component>
    `;
  },
};
