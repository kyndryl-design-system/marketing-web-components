import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS,
  STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT,
} from './def';
import stylesheet from './statsGroup.scss';

@customElement(`kd-statsgroup`)
export class KdStatsGroup extends LitElement {
  static override styles = [stylesheet];

  @property({ type: String })
  stat = '';

  @property({ type: String })
  symbol = '';

  /** Global Color Palette */
  @property({ type: String })
  colorPalette = '';

  @property({ type: String })
  symbolPlacement: string = STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.BEFORE;

  /** Vertical alignment of symbol. */
  @property({ type: String })
  symbolAlignment: string = STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT.SUPERSCRIPT;

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
          <h2
            class="kd-stats-carousel-slide-stat kd-type--display-02 kd-type--weight-bold"
          >
            ${this.stat}
          </h2>
          <div
            class="kd-stats-carousel-slide-symbol kd-type--headline-03 kd-type--weight-regular"
          >
            ${this.symbol}
          </div>
        `;
        break;
      case STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.BEFORE:
      default:
        stat = html`
          <div
            class="kd-stats-carousel-slide-symbol kd-type--headline-08 kd-type--weight-regular"
          >
            ${this.symbol}
          </div>
          <h2
            class="kd-stats-carousel-slide-stat kd-type--display-02 kd-type--weight-bold"
          >
            ${this.stat}
          </h2>
        `;
        break;
    }

    return html`
      <div class="kd-stats-carousel-slide-stat-container ${classAlignment}">
        ${stat}
      </div>
    `;
  }

  get textCardOne() {
    return html`
      <div class="full-bleed-internal-container">
        <div class="second-title">
          ${this.renderStat}
          <slot name="text-one"> </slot>
        </div>
      </div>
    `;
  }

  get textCardTwo() {
    return html`
      <div class="full-bleed-internal-container ">
        <div class="second-title">
          ${this.renderStat}
          <slot name="text-two"></slot>
        </div>
      </div>
    `;
  }
  get textCardThree() {
    return html`<div class="full-bleed-internal-container">
      <div class="second-title">
        ${this.renderStat}
        <slot name="text-three"></slot>
      </div>
    </div>`;
  }

  override render() {
    return html`
      <div class="full-bleed-grid ${this.colorPalette}">
        ${this.textCardOne} ${this.textCardTwo} ${this.textCardThree}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-statsgroup': KdStatsGroup;
  }
}
