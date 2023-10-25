/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { classMap } from 'lit-html/directives/class-map.js';

import stylesheet from './expertFeature.scss';

@customElement('kd-expert-feature')
export class ExpertFeature extends LitElement {
  static override styles = [stylesheet];

  @property({ type: String }) mediaSize = 'full';

  override render() {
    const classesContainer = {
      [`kd-expert-feature`]: true,
      [`${this.mediaSize}-media`]: true,
    };
    if (this.mediaSize == 'half') {
      return html` <div class="${classMap(classesContainer)}">
        <div class="kd-grid">
          <div class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-6">
            <div class="media-container">
              <div class="media">
                <slot name="media"></slot>
              </div>
              <div class="title kd-type--headline-01 kd-type--weight-bold">
                <slot name="title"></slot>
              </div>
            </div>
          </div>
          <div
            class="kd-grid__col--sm-4 kd-grid__col--md-7 kd-grid__col--lg-6 content"
          >
            <div
              class="content-container kd-spacing--margin-top-80 kd-spacing--padding-bottom-64"
            >
              <div class="eyebrow">
                <slot name="eyebrow" class="eyebrow"></slot>
              </div>
              <div class="headline">
                <slot
                  name="headline"
                  class="kd-type--headline-05 headline"
                ></slot>
              </div>
              <div class="body-copy">
                <slot name="body-copy" class="kd-type--body-02"></slot>
              </div>
              <div class="cta"><slot name="cta"></slot></div>
            </div>

            <div class="sidebar">
              <div class="">
                <slot
                  name="expert-name"
                  class="kd-type--body-01 expert-name"
                ></slot>
              </div>
              <div class="expert-title">
                <slot name="expert-title" class="kd-type--ui-02"></slot>
              </div>
              <div class="social-media">
                <slot name="social-media"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    } else {
      return html` <div class="${classMap(classesContainer)}">
        <div class="media-container">
          <div class="media">
            <slot name="media"></slot>
          </div>
          <div class="title kd-type--headline-01 kd-type--weight-bold">
            <slot name="title"></slot>
          </div>
        </div>
        <div
          class="content-container kd-grid kd-grid-padding kd-spacing--margin-top-80 kd-spacing--padding-bottom-64"
        >
          <div
            class="kd-grid__col--sm-4 kd-grid__col--md-7 kd-grid__col--lg-8 content"
          >
            <div class="eyebrow">
              <slot name="eyebrow" class="eyebrow"></slot>
            </div>
            <div class="headline">
              <slot
                name="headline"
                class="kd-type--headline-05 headline"
              ></slot>
            </div>
            <div class="body-copy">
              <slot name="body-copy" class="kd-type--body-02"></slot>
            </div>
            <div class="cta"><slot name="cta"></slot></div>
          </div>
          <div
            class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-1"
          ></div>
          <div class="kd-grid__col--sm-4 kd-grid__col--md-7 kd-grid__col--lg-3">
            <div class="sidebar">
              <div class="expert-name">
                <slot name="expert-name" class="kd-type--body-01"></slot>
              </div>
              <div class="spacer-line"></div>
              <div class="expert-title">
                <slot name="expert-title" class="kd-type--ui-02"></slot>
              </div>
              <div class="social-media">
                <slot name="social-media"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-expert-feature': ExpertFeature;
  }
}
