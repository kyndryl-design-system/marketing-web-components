import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@kyndryl-design-system/shidoka-foundation';
import '@kyndryl-design-system/shidoka-foundation/components/link';
import '@kyndryl-design-system/shidoka-foundation/components/button';
import chevronRightIcon from '@carbon/icons/es/chevron--right/16';
import '@kyndryl-design-system/shidoka-foundation/components/icon';
import stylesheet from './eventSingleBase.scss';

@customElement('kd-event-single-base')
export class EventSingleBase extends LitElement {
  static override styles = [stylesheet];

  @property({ type: String }) buttonLink = '';
  @property({ type: String }) date = '';
  @property({ type: String }) time = '';
  @property({ type: String }) location = '';

  override render() {
    return html`
      <div class="container">
        <button class="button">${this.date}</button>

        <div class="text-container">
          <p class="country">${this.location}</p>
          <p class="timezone">${this.time}</p>
          <kd-link
            href="${this.buttonLink}"
            target="_self"
            kind="secondary"
            standalone
            class="register-button"
          >
            Register now
            <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>
          </kd-link>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-event-single-base': EventSingleBase;
  }
}
