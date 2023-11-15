/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html } from 'lit';
import './eventMultipleComponent';
import '../EventSingleBase/eventSingleBase';

export default {
  title: 'Components/Event Multiple',
  component: `kd-event-multiple-component`,
  argTypes: {
    headlineTextOne: {
      control: { type: 'text' },
      description: 'Headline Text (required)',
    },
    headlineTextTwo: {
      control: { type: 'text' },
      description: 'Headline Text (required)',
    },
  },
};

const args = {
  headlineTextOne: 'Lorem ipsum dolor sit amet dsdsdsdsdssd',
  headlineTextTwo: 'Lorem ipsum dolor sit amet dsdsdsdsdssd',
};

export const Template = {
  args,
  render: (args: any) => {
    return html`
      <kd-event-multiple-component
        headlineTextOne="${args.headlineTextOne}"
        headlineTextTwo="${args.headlineTextTwo}"
      >
        <div slot="text-one">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            facilisi pellentesque morbi molestie sed ut at sed ac. Semper tortor
            feugiat non sem eget libero. Risus semper facilisis convallis vitae.
          </p>
          <kd-event-single-base
            time="12:00 PM EST"
            location="Syndey"
            date="Nov 29"
          ></kd-event-single-base>
          <kd-event-single-base
            time="12:00 PM EST"
            location="Syndey"
            date="Nov 29"
          ></kd-event-single-base>
        </div>
        <div slot="text-two">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            facilisi pellentesque morbi molestie sed ut at sed ac. Semper tortor
            feugiat non sem eget libero. Risus semper facilisis convallis vitae.
          </p>
          <kd-event-single-base
            time="12:00 PM EST"
            location="Syndey"
            date="Nov 29"
          ></kd-event-single-base>
          <kd-event-single-base
            time="12:00 PM EST"
            location="Syndey"
            date="Nov 29"
          ></kd-event-single-base>
        </div>
      </kd-event-multiple-component>
    `;
  },
};
