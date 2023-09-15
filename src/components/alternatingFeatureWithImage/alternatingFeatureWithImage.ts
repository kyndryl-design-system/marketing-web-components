/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';

import { classMap } from 'lit-html/directives/class-map.js';

import '@kyndryl-design-system/foundation/components/button';
import chevronRightIcon from '@carbon/icons/es/chevron--right/20';
import stylesheet from './alternatingFeatureWithImage.scss';
import '../eyebrow/eyebrow';

@customElement('kd-alternating-feature-with-image')
export class kdAlternatingFeatureWithImage extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) reverse;
  @property({ type: String }) bleedMedia;
  @property({ type: String }) buttonLabel;
  @property({ type: String }) buttonLink;
  @property({ type: String }) buttonType;
  @property({ type: String }) headlineText;
  @property({ type: String }) eyebrowText;

  // @property() theme: THEMES;

  get eyebrowTemplate() {
    if (this.eyebrowText) {
      return html` <kd-eyebrow>${this.eyebrowText}</kd-eyebrow> `;
    } else {
      return null;
    }
  }

  get ctaTemplate() {
    if (this.buttonLabel) {
      return html`
        <kd-button
          kind="primary-app"
          type="button"
          iconposition="right"
          description=""
          href="${this.buttonLink}"
        >
          ${this.buttonLabel}
          <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>
        </kd-button>
      `;
    } else {
      return null;
    }
  }

  get slot1Template() {
    if (this.reverse === 'true') {
      if (this.bleedMedia === 'true') {
        return html`
          <div class="container-one container-media">
            <slot name="media"></slot>
          </div>
        `;
      } else {
        return html`
          <div
            class="full-bleed-internal-container container-one container-media"
          >
            <div class="kd-grid kd-grid-padding">
              <div
                class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-6 internal-media-slot"
              >
                <slot name="media"></slot>
              </div>
            </div>
          </div>
        `;
      }
    } else {
      return html`
        <div class="full-bleed-internal-container container-one container-text">
          <div class="kd-grid kd-grid-padding">
            <div
              class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-6 internal-text-slot"
            >
              ${this.textCard}
            </div>
          </div>
        </div>
      `;
    }
  }

  get slot2Template() {
    if (this.reverse === 'true') {
      return html`
        <div class="full-bleed-internal-container container-two container-text">
          <div class="kd-grid kd-grid-padding">
            <div
              class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-6 internal-text-slot"
            >
              ${this.textCard}
            </div>
          </div>
        </div>
      `;
    } else {
      if (this.bleedMedia === 'true') {
        return html` <div class="container-two container-media">
          <slot name="media"></slot>
        </div>`;
      } else {
        return html`
          <div
            class="full-bleed-internal-container container-two container-media"
          >
            <div class="kd-grid kd-grid-padding">
              <div
                class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-6 internal-media-slot"
              >
                <slot name="media"></slot>
              </div>
            </div>
          </div>
        `;
      }
    }
  }

  get textCard() {
    return html`
      ${this.eyebrowTemplate}
      <h3 class="headline-06-light">${this.headlineText}</h3>
      <slot name="text"></slot>
      ${this.ctaTemplate}
    `;
  }

  render() {
    const classesContainer = classMap({
      [`kd-alternating-feature-with-image`]: true,
    });

    if (this.reverse === 'true') {
      return html`
        <div class="${classesContainer}">
          <div class="full-bleed-grid">  
            ${this.slot1Template}      
            ${this.slot2Template}      
          </div>
          </div>
        </div>
      `;
    } else {
      return html`
        <div class="${classesContainer}">
          <div class="full-bleed-grid">  
              ${this.slot2Template}      
              ${this.slot1Template}
          </div>
          </div>
        </div>
      `;
    }
  }
}
