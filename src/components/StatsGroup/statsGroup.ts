import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import stylesheet from './statsGroup.scss';

@customElement(`kd-statsgroup`)
export class KdStatsGroup extends LitElement {
  static override styles = [stylesheet];

  @property({ type: String }) firstEventTitle = '';
  @property({ type: String }) secondEventTitle = '';
  @property({ type: String }) thirdEventTitle = '';

  get textCardOne() {
    return html`
      <div class="full-bleed-internal-container">
        <h1 class="kd-type--headline-07 title-color">
          ${this.firstEventTitle}
        </h1>
        <div class="second-title">
          <h1 class="kd-type--display-02">$000k</h1>
          <slot name="text-one"> </slot>
        </div>
      </div>
    `;
  }

  get textCardTwo() {
    return html`
      <div class="full-bleed-internal-container ">
        <h1 class="kd-type--headline-07 title-color">
          ${this.secondEventTitle}
        </h1>
        <div class="second-title">
          <h1 class="kd-type--display-02">$000k</h1>
          <slot name="text-two"></slot>
        </div>
      </div>
    `;
  }
  get textCardThree() {
    return html`<div class="full-bleed-internal-container">
      <h1 class="kd-type--headline-07 title-color">${this.thirdEventTitle}</h1>
      <div class="second-title">
        <h1 class="kd-type--display-02">$000k</h1>
        <slot name="text-three"></slot>
      </div>
    </div>`;
  }

  override render() {
    return html`
      <div class="full-bleed-grid">
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
