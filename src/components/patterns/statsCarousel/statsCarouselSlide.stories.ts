import { html } from 'lit';
import { createOptionsArray } from '@kyndryl-design-system/shidoka-foundation/common/helpers/storybook';
import './index';
import { STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS, STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT } from './defs';

export default {
	title: 'Patterns/Stats Carousel/Stats Carousel Slide',
	component: 'kd-stats-carousel-slide',
	argTypes: {
		stat: {
			control: { type: 'text' },
		},
		symbol: {
			control: { type: 'text' },
		},
		symbolPlacement: {
			control: { type: 'radio' },
			options: createOptionsArray(STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS),
		},
		symbolAlignment: {
			control: { type: 'radio' },
			options: createOptionsArray(STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT),
		},
	},
};

const args = {
	stat: '$100',
	symbol: 'M',
	symbolPlacement: STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.AFTER,
	symbolAlignment: STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT.SUPERSCRIPT,
}

export const StatsCarouselSlide = {
	args,
	render: ({...args}) => {
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
