import { html } from 'lit';
import './index';
import { STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS } from './defs';

export default {
	title: 'Components/Stats Carousel',
	component: 'kd-stats-carousel',
};

export const statsCarousel = {
	args: {},
	render: () => {
		return html`
			<kd-stats-carousel
				carouselTitle="Dicimus non negare adipiscing vacuitatem accesseris in isto hoc aegyptum ei inquit animus cum."
			>
				<kd-stats-carousel-slide
					stat="100"
					symbol="$"
					symbolPlacement="${STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.BEFORE}"
				>
					<p>Fregellanum quae quis optimis id traditur pertinacior viros dici et. Vos quam etiam quidem restatis mecum inquam redargueret quidem me nihil dedocendi homines et. In nihil autem se homines est lorem eo.</p>
				</kd-stats-carousel-slide>
				<kd-stats-carousel-slide
					stat="200"
					symbol="%"
					symbolPlacement="${STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.AFTER}"
				>
					<p>Sironem flagitiosum eo est esse eo odit locus lustravit atqui. Nisi eius est habent.</p>
				</kd-stats-carousel-slide>
				<kd-stats-carousel-slide
					stat="300k"
					symbol="$"
					symbolPlacement="${STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.BEFORE}"
				>
					<p>In nihil autem se homines est lorem eo.</p>
				</kd-stats-carousel-slide>
			</kd-stats-carousel>
		`;
	}
}
