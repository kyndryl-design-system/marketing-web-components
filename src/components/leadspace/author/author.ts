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

import stylesheet from './author.scss';

@customElement('kd-leadspace-author')
export class LeadspaceAuthor extends LitElement {
  static override styles = [stylesheet];
  @property({ type: String }) name = '';
  @property({ type: String }) title = '';
  @property({ type: String }) location = '';
  @property({ type: String }) industry = '';
  @property({ type: String }) socialmedia = '';

  override render() {
    const classesContainer = {
      [`kd-leadspace-author`]: true,
    };

    return html`
      <div class="${classMap(classesContainer)}">
       
          <div class="kd-grid">
            <div class="kd-grid__col--lg-2 side-pad"></div>
            <div class="kd-grid__col--sm-4 kd-grid__col--md-4 kd-grid__col--lg-4 text-block">
              <div class="name kd-type--headline-05"><slot name="name"></slot></div>
              <div class="title kd-type--body-01"><slot name="title"></slot></div>
              <div class="industry-and-location kd-type--ui-03">
                <div class="industry"><slot name="industry"></slot></div>
                <div class="location"><slot name="location"></slot></div>
              </div>
              <div class="socialmedia"><slot name="socialmedia"></slot></div>
            </div>
            <div class="kd-grid__col--sm-4 kd-grid__col--md-4 kd-grid__col--lg-4 media-block">
              <slot name="media"></slot>
            </div>
            <div class="kd-grid__col--lg-2 side-pad"></div>

      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-leadspace-author': LeadspaceAuthor;
  }
}