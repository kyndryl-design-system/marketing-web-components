import { html } from 'lit';
import { createColorPaletteLabels, createOptionsArray } from '../../common/helpers/helpers';
import { COLOR_PALETTE_LABELS, COLOR_PALETTE_VALUES } from '../../common/defs/colorPalettes';
import './index';
import { LEADSPACE_INTERIOR_MEDIA_POSITIONS } from './defs';

export default {
	title: 'Components/Leadspace Interior',
	component: 'kd-leadspace-interior',
	argTypes: {
		colorPalette: {
			options: createOptionsArray(COLOR_PALETTE_VALUES),
			control: {
				type: 'select',
				labels: createColorPaletteLabels(COLOR_PALETTE_LABELS, COLOR_PALETTE_VALUES),
			},
		},
		mediaPosition: {
			control: { type: 'radio' },
			options: createOptionsArray(LEADSPACE_INTERIOR_MEDIA_POSITIONS),
			table: {
				defaultValue: { summary: LEADSPACE_INTERIOR_MEDIA_POSITIONS.LEFT },
			},
		},
		isFullBleed: {
			control: { type: 'boolean' },
		},
		eyebrowText: {
			control: { type: 'text' },
		},
		headlineText: {
			control: { type: 'text' },
		},
		primaryCtaText: {
			control: { type: 'text' },
		},
		primaryCtaLink: {
			control: { type: 'text' },
		},
		secondaryCtaText: {
			control: { type: 'text' },
		},
	},
};

const args = {
	colorPalette: '',
	mediaPosition: LEADSPACE_INTERIOR_MEDIA_POSITIONS.LEFT,
	isFullBleed: true,
	eyebrowText: 'Eyebrow text',
	headlineText: 'Lorem ipsum dolor sit amet',
	primaryCtaText: 'Primary CTA',
	primaryCtaLink: 'https://www.kyndryl.com',
	secondaryCtaText: 'Secondary Media CTA',
}

export const LeadspaceInterior = {
	args,
	render: ({...args}) => {
		console.log('args.isFullBleed', args.isFullBleed);
		return html`
			<kd-leadspace-interior
				colorPalette="${args.colorPalette}"
				mediaPosition="${args.mediaPosition}"
				.isFullBleed="${args.isFullBleed}"
				headlineText="${args.headlineText}"
				eyebrowText="${args.eyebrowText}"
				primaryCtaText="${args.primaryCtaText}"
				primaryCtaLink="${args.primaryCtaLink}"
				secondaryCtaText="${args.secondaryCtaText}"
			>
				<div slot="media">
					<img
						src="https://s7d1.scene7.com/is/image/kyndryl/sky_whitebridge_1x1?qlt=100"
						alt="image alt text"
						class="kd-layout__aspect-ratio--1x1 kd-layout__object-fit--cover"
					/>
				</div>
				<div slot="description">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu facilisi pellentesque morbi molestie sed ut at sed ac. Semper tortor feugiat non sem eget libero. Risus semper facilisis convallis vitae.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu facilisi pellentesque morbi molestie sed ut at sed ac. Semper tortor feugiat non sem eget libero. Risus semper facilisis convallis vitae.</p>
				</div>
			</kd-leadspace-interior>
		`;
	}
}
