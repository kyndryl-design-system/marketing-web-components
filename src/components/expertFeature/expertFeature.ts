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

  @property({ type: String }) bigMedia = 'true';

  override render() {
    const classesContainer = {
      [`kd-expert-feature`]: true,
    };

    return html` <div class="${classMap(classesContainer)}">
      <div class="media-container">
        <div class="media kd-layout__aspect-ratio--21x9">
          <slot name="media"></slot>
        </div>
        <div class="title kd-type--headline-01 kd-type--weight-regular">
          <slot name="title"></slot>
        </div>
      </div>
      <div
        class="content-container kd-grid kd-grid-padding kd-spacing--margin-top-80"
      >
        <div class="kd-grid__col--lg-8 content">
          <slot name="eyebrow"></slot>
          <slot name="headline" class="kd-type--headline-05"></slot>
          <slot name="body-copy" class="kd-type--body-02"></slot>
          <slot name="cta"></slot>
        </div>
        <div class="kd-grid__col--lg-1"></div>
        <div class="kd-grid__col--lg-3 sidebar">
          <slot name="expert-name" class="kd-type--body-01"></slot>
          <slot name="expert-title" class="kd-type--ui-02"></slot>
          <slot name="social-media"></slot>
        </div>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-expert-feature': ExpertFeature;
  }
}
