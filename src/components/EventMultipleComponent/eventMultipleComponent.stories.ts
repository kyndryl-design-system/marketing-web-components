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
  headlineTextOne: 'Quis feugiat laoreet proin suscipit vulputate amet lectus.',
  headlineTextTwo: 'Quis feugiat laoreet proin suscipit vulputate amet lectus.',
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
          <kd-event-single-base
            time="12:00 PM EST"
            location="San Francisco"
            date="Nov 29"
          ></kd-event-single-base>
          <kd-event-single-base
            time="12:00 PM EST"
            location="San Francisco"
            date="Nov 29"
          ></kd-event-single-base>
        </div>
        <div slot="text-two">
          <kd-event-single-base
            time="12:00 PM EST"
            location="San Francisco"
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
