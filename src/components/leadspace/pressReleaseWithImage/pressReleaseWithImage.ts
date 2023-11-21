/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { classMap } from 'lit-html/directives/class-map.js';

import '@kyndryl-design-system/shidoka-foundation/components/button';
import '@kyndryl-design-system/shidoka-foundation/components/icon';
import '@kyndryl-design-system/shidoka-foundation/components/link';
import '../../eyebrow';

import stylesheet from './pressReleaseWithImage.scss';
import { Eyebrow } from '../../eyebrow';

@customElement('kd-leadspace-press-release-with-image')
export class LeadspacePressReleaseWithImage extends LitElement {
  static override styles = [stylesheet];

  override render() {
    const classesContainer = {
      [`kd-leadspace-press-release-with-image`]: true,
    };

    return html`
      <div class="${classMap(classesContainer)}">
        <div class="relative">
          <div class="accent-background"></div>
          <div class="kd-grid">
            <div
              class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-8 start-point text-block"
            >
              <div class="eyebrow"><slot name="eyebrow"></slot></div>
              <div class="title kd-type--headline-07">
                <slot name="title"></slot>
              </div>
              <div class="page-type-and-date kd-type--ui-03">
                <slot name="pagetype"></slot> | <slot name="date"></slot>
              </div>
            </div>
          </div>
        </div>
        <div class="kd-grid">
          <div
            class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-8 start-point media-block"
          >
            <slot name="media"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-leadspace-press-release-with-image': LeadspacePressReleaseWithImage;
  }
}
