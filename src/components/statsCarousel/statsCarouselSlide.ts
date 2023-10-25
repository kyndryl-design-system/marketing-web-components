import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS, STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT } from './defs';
import stylesheet from './statsCarouselSlide.scss';

@customElement('kd-stats-carousel-slide')
export class StatsCarouselSlide extends LitElement {
	static override styles = stylesheet;

	@property({ type: String }) stat = '';
	@property({ type: String }) symbol = '';
	@property({ type: String }) symbolPlacement: STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS = STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.BEFORE;
	@property({ type: String }) symbolAlignment: STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT = STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT.SUPERSCRIPT;

	private get renderStat() {
		let classAlignment: string;
		switch (this.symbolAlignment) {
			case STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT.CENTER:
				classAlignment = 'is-center';
				break;
			case STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT.SUBSCRIPT:
				classAlignment = 'is-subscript';
				break;
			case STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT.SUPERSCRIPT:
			default:
				classAlignment = '';
				break;
		}

		let stat: TemplateResult;
		switch (this.symbolPlacement) {
			case STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.AFTER:
				stat = html`
					<div class="kd-stats-carousel-slide-stat kd-type--hero-04 kd-type--weight-bold">${this.stat}</div>
					<div class="kd-stats-carousel-slide-symbol kd-type--headline-01 kd-type--weight-regular">${this.symbol}</div>
				`
				break;
			case STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.BEFORE:
			default:
				stat = html`
					<div class="kd-stats-carousel-slide-symbol kd-type--headline-01 kd-type--weight-regular">${this.symbol}</div>
					<div class="kd-stats-carousel-slide-stat kd-type--hero-04 kd-type--weight-bold">${this.stat}</div>
				`
				break;
		}

		return html`
			<div class="kd-stats-carousel-slide-stat-container ${classAlignment}">
				${stat}
			</div>
		`
	}
	override render() {
		return html`
			<div class="kd-stats-carousel-slide kd-grid">
				<div class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-6">
					${this.renderStat}
				</div>
				<div class="kd-stats-carousel-slide-description kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-6 kd-type--body-01">
					<slot></slot>
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'kd-stats-carousel-slide': StatsCarouselSlide;
	}
}
