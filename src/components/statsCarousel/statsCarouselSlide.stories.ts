import { html } from 'lit';
import { createOptionsArray } from '../../common/helpers/helpers';
import './index';
import { STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS, STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT } from './defs';

export default {
	title: 'Components/Stats Carousel/Stats Carousel Slide',
	component: 'kd-stats-carousel-slide',
	argTypes: {
		stat: {
			control: { type: 'text' },
			description: 'Stat value',
		},
		symbol: {
			control: { type: 'text' },
			description: 'Stat symbol',
		},
		symbolPlacement: {
			control: { type: 'radio' },
			options: createOptionsArray(STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS),
			description: 'Stat symbol placement',
		},
		symbolAlignment: {
			control: { type: 'radio' },
			options: createOptionsArray(STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT),
			description: 'Stat symbol alignment',
		},
	},
};

const args = {
	stat: '100',
	symbol: '$',
	symbolPlacement: STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.BEFORE,
	symbolAlignment: STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT.SUPERSCRIPT,
}

export const statsCarouselSlide = {
	args,
	render: (args: any) => {
		return html`
			<kd-stats-carousel-slide
				stat="${args.stat}"
				symbol="${args.symbol}"
				symbolPlacement="${args.symbolPlacement}"
				symbolAlignment="${args.symbolAlignment}"
			>
				<p>Fregellanum quae quis optimis id traditur pertinacior viros dici et. Vos quam etiam quidem restatis mecum inquam redargueret quidem me nihil dedocendi homines et. In nihil autem se homines est lorem eo.</p>
			</kd-stats-carousel-slide>
		`;
	}
}
