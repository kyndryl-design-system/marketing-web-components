import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS } from './defs';
import stylesheet from './statsCarouselSlide.scss';

@customElement('kd-stats-carousel-slide')
export class StatsCarouselSlide extends LitElement {
	static override styles = stylesheet;

	@property({ type: String }) stat = '';
	@property({ type: String }) symbol = '';
	@property({ type: String }) symbolPlacement: STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS = STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.BEFORE;

	private get renderStat() {
		if (this.symbolPlacement === STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.BEFORE) {
			return html`
				<div class="kd-stats-carousel-slide-symbol">${this.symbol}</div>
				<div class="kd-stats-carousel-slide-stat">${this.stat}</div>
			`
		} else {
			return html`
				<div class="kd-stats-carousel-slide-stat">${this.stat}</div>
				<div class="kd-stats-carousel-slide-symbol">${this.symbol}</div>
			`
		}
	}
	override render() {
		return html`
			<div class="kd-stats-carousel-slide kd-grid">
				<div class="kd-grid__col--sm-4 kd-grid__col--md-1"></div>
				<div class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-5">
					<div class="kd-stats-carousel-slide-stat-container kd-type--hero-04 kd-type--weight-bold">
						${this.renderStat}
					</div>
				</div>
				<div class="kd-stats-carousel-slide-description kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-5 kd-type--body-01">
					<slot></slot>
				</div>
				<div class="kd-grid__col--sm-4 kd-grid__col--md-1"></div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'kd-stats-carousel-slide': StatsCarouselSlide;
	}
}
