import { html } from 'lit';
import { createOptionsArray } from '../../common/helpers/helpers';
import './index';
import { STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS } from './defs';

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
	},
};

const args = {
	stat: '100',
	symbol: '$',
	symbolPlacement: STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.BEFORE,
}

export const statsCarouselSlide = {
	args,
	render: (args: any) => {
		return html`
			<kd-stats-carousel-slide
				stat="${args.stat}"
				symbol="${args.symbol}"
				symbolPlacement="${args.symbolPlacement}"
			>
				<p>Fregellanum quae quis optimis id traditur pertinacior viros dici et. Vos quam etiam quidem restatis mecum inquam redargueret quidem me nihil dedocendi homines et. In nihil autem se homines est lorem eo.</p>
			</kd-stats-carousel-slide>
		`;
	}
}
