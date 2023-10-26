/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import stylesheet from './leftcolumnNavigation.scss';

@customElement(`kd-left-column-navigation`)
export class LeftColumnNavigation extends LitElement {
  static override styles = [stylesheet];

  override connectedCallback(): void {}

  get navItems() {
    const slot = this.shadowRoot?.querySelector('a');
    console.log(slot);
    return slot;
  }

  override render() {
    return html`
      <div class="kd-left-column-navigation kd-grid">
        <div class="left-nav kd-grid__col--lg-3"${this.navItems}</div>
        <div class="content kd-grid__col--lg-7">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-left-column-navigation': LeftColumnNavigation;
  }
}
