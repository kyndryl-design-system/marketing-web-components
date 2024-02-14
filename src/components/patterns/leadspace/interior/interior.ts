/**
 * Copyright Kyndryl, Inc. 2024
 */

import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { classMap } from 'lit-html/directives/class-map.js';

import '@kyndryl-design-system/shidoka-foundation/components/button';
import '@kyndryl-design-system/shidoka-foundation/components/icon';
import '@kyndryl-design-system/shidoka-foundation/components/link';
import chevronRightIcon from '@carbon/icons/es/chevron--right/16';
import stylesheet from './interior.scss';
import '../../../eyebrow/eyebrow';

@customElement('kd-leadspace-interior')
export class LeadspaceInterior extends LitElement {
  static override styles = [stylesheet];

  @property({ type: String }) mediaPosition = 'left';
  @property({ type: String }) bleedMedia = 'false';
  @property({ type: String }) buttonLabel = '';
  @property({ type: String }) buttonLink = '';
  @property({ type: String }) buttonType = 'primary-web';
  @property({ type: String }) headlineText = '';
  @property({ type: String }) eyebrowText = '';

  get eyebrowTemplate() {
    if (this.eyebrowText) {
      return html` <kd-eyebrow>${this.eyebrowText}</kd-eyebrow>
        <div class="red-mini-line"></div>`;
    } else {
      return null;
    }
  }

  get ctaTemplate() {
    if (this.buttonLabel) {
      return html`
        <div class="text-box-cta">
          <kd-link
            href="${this.buttonLink}"
            target="_self"
            kind="secondary"
            standalone
          >
            ${this.buttonLabel}
            <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>
          </kd-link>
        </div>
      `;
    } else {
      return null;
    }
  }

  get textCard() {
    return html`
      ${this.eyebrowTemplate}
      <h3 class="kd-type--headline-06 kd-type--weight-light">
        ${this.headlineText}
      </h3>
      <slot name="text"></slot>
      ${this.ctaTemplate}
    `;
  }

  get slot1Template() {
    if (this.mediaPosition === 'left') {
      return html` <div class="container-one container-media">
        <slot name="media"></slot>
      </div>`;
    } else {
      return html`
        <div class="full-bleed-internal-container container-one container-text">
          <div class="kd-grid kd-grid-padding">
            <div
              class="kd-grid__col--sm-4 kd-grid__col--md-7 kd-grid__col--lg-6 internal-text-slot"
            >
              ${this.textCard}
            </div>
          </div>
        </div>
      `;
    }
  }

  get slot2Template() {
    if (this.mediaPosition === 'left') {
      return html`
        <div class="full-bleed-internal-container container-two container-text">
          <div class="kd-grid kd-grid-padding">
            <div
              class="kd-grid__col--sm-4 kd-grid__col--md-7 kd-grid__col--lg-6 internal-text-slot right-text-slot"
            >
              ${this.textCard}
            </div>
          </div>
        </div>
      `;
    } else {
      return html` <div class="container-two container-media">
        <slot name="media"></slot>
      </div>`;
    }
  }

  override render() {
    const classesContainer = {
      [`kd-leadspace-interior`]: true,
    };

    if (this.mediaPosition === 'left') {
      return html`
        <div class="${classMap(classesContainer)}">
          <div class="full-bleed-grid">
            ${this.slot1Template} ${this.slot2Template}
          </div>
        </div>
      `;
    } else {
      return html`
        <div class="${classMap(classesContainer)}">
          <div class="full-bleed-grid">
            ${this.slot2Template} ${this.slot1Template}
          </div>
        </div>
      `;
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'kd-leadspace-interior': LeadspaceInterior;
  }
}
