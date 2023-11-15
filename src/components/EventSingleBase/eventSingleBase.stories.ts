import { html } from 'lit';
import './eventSingleBase';

export default {
  title: 'Components/EventSingleBase',
  component: 'kd-event-single-base',
};

const args = {
  time: '12:00 PM EST',
  location: 'Mumbai',
  date: 'Nov 29',
};
export const Template = {
  args,
  render: (args: any) => {
    return html`
      <kd-event-single-base
        date="${args.date}"
        location="${args.location}"
        time="${args.time}"
      ></kd-event-single-base>
    `;
  },
};
