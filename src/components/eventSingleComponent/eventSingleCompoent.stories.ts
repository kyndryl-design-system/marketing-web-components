import { html } from 'lit';
import './eventSingleComponent';

export default {
  title: 'Components/EventSingleComponent',
  component: 'kd-event-single-component',
};

const args = {
  mediaPosition: 'left',
  bleedMedia: 'false',
  headlineText: 'Lorem ipsum dolor sit amet dsdsdsdsdssd',
  buttonLink: 'https://www.kyndryl.com',
  eventSingleBaseComponent: 'true',
  time: '12:00 PM EST',
  location: 'Mumbai',
  date: 'Nov 29',
};

export const Template = {
  args,
  render: (args: any) => {
    return html`<kd-event-single-component
      mediaPosition="${args.mediaPosition}"
      bleedmedia="${args.bleedMedia}"
      headlineText="${args.headlineText}"
      eyebrowtext="${args.eyebrowText}"
      buttonLabel="${args.buttonLabel}"
      buttonLink="${args.buttonLink}"
      eventSingleBaseComponent="${args.eventSingleBaseComponent}"
      date="${args.date}"
      location="${args.location}"
      time="${args.time}"
    ></kd-event-single-component>`;
  },
};
