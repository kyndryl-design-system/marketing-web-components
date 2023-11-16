import { html } from 'lit';
import './index';

export default {
	title: 'Components/Call to Action/Persistent CTA',
	component: 'kd-persistent-cta',
	argTypes: {
		ctaText: {
			control: { type: 'text' },
		},
		ctaLink: {
			control: { type: 'text' },
		},
		openNewWindow: {
			control: { type: 'boolean' },
		},
		bodyText: {
			control: { type: 'text' },
		},
	},
};

const args = {
	ctaText: 'Download',
	ctaLink: 'https://www.kyndryl.com',
	openNewWindow: true,
	bodyText: 'Pythagoras viros homines erit quae mecum se nisi possit optimos positum epicuro magis.',
}

export const PersistentCta = {
	args,
	render: ({...args}) => {
		return html`
			<div style="height: 50vh;"></div><!-- simulate content height in Storybook  -->
			<kd-persistent-cta
				ctaText="${args.ctaText}"
				ctaLink="${args.ctaLink}"
				.openNewWindow="${args.openNewWindow}"
				bodyText="${args.bodyText}"
			></kd-persistent-cta>
		`;
	}
}
