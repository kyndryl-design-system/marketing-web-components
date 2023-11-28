import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@kyndryl-design-system/shidoka-foundation';
import '@kyndryl-design-system/shidoka-foundation/components/link';
import '@kyndryl-design-system/shidoka-foundation/components/button';
import '@kyndryl-design-system/shidoka-foundation/components/icon';
import stylesheet from './eventMultipleComponent.scss';

@customElement('kd-event-multiple-component')
export class KdEventMultipleComponent extends LitElement {
  static override styles = [stylesheet];

  @property({ type: String }) headlineTextOne = '';
  @property({ type: String }) headlineTextTwo = '';

  get textCardOne() {
    return html`
      <div class="full-bleed-internal-container">
        <h3 class="kd-type--headline-07 kd-type--weight-light">
          ${this.headlineTextOne}
        </h3>

        <p class="kd-type--body-02 kd-type--weight-regular">
          Sit sollicitudin imperdiet lectus elementum hac dolor nisl. Diam arcu
          nunc fames fringilla. Consequat mi mauris tellus est pellentesque
          eget.
        </p>
        <slot name="text-one"></slot>
      </div>
    `;
  }

  get textCardTwo() {
    return html`
      <div class="full-bleed-internal-container">
        <h3 class="kd-type--headline-07 kd-type--weight-light">
          ${this.headlineTextTwo}
        </h3>
        <p class="kd-type--body-02 kd-type--weight-regular">
          Sit sollicitudin imperdiet lectus elementum hac dolor nisl. Diam arcu
          nunc fames fringilla. Consequat mi mauris tellus est pellentesque
          eget.
        </p>

        <slot name="text-two"></slot>
      </div>
    `;
  }

  get eventTitle() {
    return html` <div class="title">
      <h1 class="kd-type--hero-02">events</h1>
    </div>`;
  }
  override render() {
    return html`<div class="container">
      ${this.eventTitle}
      <div class="full-bleed-grid">${this.textCardOne} ${this.textCardTwo}</div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-event-multiple-component': KdEventMultipleComponent;
  }
}
