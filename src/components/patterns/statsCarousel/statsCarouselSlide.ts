import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS, STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT } from './defs';
import stylesheet from './statsCarouselSlide.scss';

/**
 * Stats Carousel Slide.
 * Component to be used within a Stats Carousel container component.
 * @slot unnamed - Slot for description text that provides additional or important details that describes further about the numerical value. Optimal character count: 110-160
 */
@customElement('kd-stats-carousel-slide')
export class StatsCarouselSlide extends LitElement {
	static override styles = stylesheet;

	/** Stat value should be a number, but it can include a symbol (e.g. $100). Max character count: 7 */
	@property({ type: String })
	stat = '';

	/** Symbol associated with the numerical value (>, <, %, $) or letters representing thousand (k), million (M) or billion (B). Max character count: 1 */
	@property({ type: String })
	symbol = '';

	/** Symbol placement before or after the stat value. */
	@property({ type: String })
	symbolPlacement: string = STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.BEFORE;

	/** Vertical alignment of symbol. */
	@property({ type: String })
	symbolAlignment: string = STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT.SUPERSCRIPT;

	/**
	 * Render the stat based on selected options.
	 * @ignore
	 */
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
			<div class="kd-stats-carousel-slide">
				${this.renderStat}
				<div class="kd-stats-carousel-slide-description kd-type--body-01">
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
