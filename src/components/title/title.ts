/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
// import stylesheet from './eyebrow.scss';

@customElement(`kd-title`)
export class KdTitle extends LitElement {
  //   static override styles = [stylesheet];

  override render() {
    return html` <slot name="title"></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-title': KdTitle;
  }
}
