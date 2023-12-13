import { html } from 'lit';
import { createOptionsArray } from '@kyndryl-design-system/shidoka-foundation/common/helpers/storybook';
import { INTRO_PRIMARY_TITLE_COLOR } from './defs';
import './index';

export default {
	title: 'Text/Introduction Primary',
	component: 'kd-intro-primary',
	argTypes: {
		introTitle: {
			control: { type: 'text' },
		},
		introTitleColor: {
			options: createOptionsArray(INTRO_PRIMARY_TITLE_COLOR),
			control: {
				type: 'select',
			},
		},
		text: {
			control: { type: 'text' },
		},
	},
};

const args = {
	introTitle: 'Aenean lacinia biben dum nulla sed lorem consectetur. Donec nulla non metus.',
	introTitleColor: INTRO_PRIMARY_TITLE_COLOR.DARKSTONE,
	text: html`
		<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
	`
}

export const IntroductionPrimary = {
	args,
	render: ({...args}) => {
		return html`
			<kd-intro-primary 
				introTitle="${args.introTitle}" 
				introTitleColor="${args.introTitleColor}"
			>
				<div slot="text">${args.text}</div>
			</kd-intro-primary>
		`;
	}
}
