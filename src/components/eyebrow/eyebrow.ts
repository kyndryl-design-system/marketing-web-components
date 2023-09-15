/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';
import stylesheet from './eyebrow.scss';

import { classMap } from 'lit-html/directives/class-map.js';

@customElement(`kd-eyebrow`)
export class kdEyebrow extends LitElement {
  static styles = [stylesheet];

  render() {
    return html`
      <div class="kd-eyebrow">
        <p class="kd-type--ui-03">
          <slot></slot>
        </p>
      </div>
    `;
  }
}
