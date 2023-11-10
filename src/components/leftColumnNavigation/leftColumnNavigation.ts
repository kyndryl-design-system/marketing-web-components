/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import stylesheet from './leftcolumnNavigation.scss';
import { debounce } from '../../common/helpers/helpers';

@customElement('kd-left-column-navigation')
export class LeftColumnNavigation extends LitElement {
  static override styles = [stylesheet];
  navigationItems: Array<object> = [];
  @property({ type: Number }) offset = 0;

  //@property({ attribute: false }) navigationElements = {items: []};

  override connectedCallback() {
    super.connectedCallback();

    window.addEventListener('scroll', debounce(this._handleScrollEvent));
    window.addEventListener('resize', debounce(this._handleResizeEvent));
  }

  protected override firstUpdated() {
    this._setActiveNavItem();
  }

  protected override updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    this._buildNavigation();
    //this._setActiveNavItem();
  }

  private _buildNavigation() {
    const bodyAnchors = this.querySelectorAll('*[data-title]');
    this.navigationItems = [];
    bodyAnchors.forEach((item) => {
      const navItem: leftNavItem = {
        name: item.getAttribute('name'),
        level: item.getAttribute('level'),
        title: item.getAttribute('data-title'),
        offset: item.offsetTop,
      };
      this.navigationItems.push(navItem);
    });
  }

  private _setActiveNavItem() {
    let closestPositiveItemIndex = 0;
    let closestOffsetDifference: number;
    const pixelsFromTop = window.scrollY;
    this.navigationItems.forEach(function (value, index) {
      const windowElementDifference = value.offset - pixelsFromTop;
      if (windowElementDifference >= 0) {
        if (
          closestOffsetDifference == null ||
          windowElementDifference < closestOffsetDifference
        ) {
          closestOffsetDifference = windowElementDifference;
          closestPositiveItemIndex = index;
        }
      }
    });
    this.renderRoot
      .querySelectorAll('.left-nav-sticky div.active')
      .forEach(function (item) {
        item.classList.remove('active');
      });
    this.renderRoot
      .querySelector(
        '.left-nav-sticky div.' +
          this.navigationItems[closestPositiveItemIndex].name
      )
      ?.classList.add('active');
  }

  get navItems() {
    this._buildNavigation();
    return html`
      <div class="left-nav-sticky">
        ${this.navigationItems.map(
          (item) =>
            html`<div
              class="nav-item kd-type--body-02 level-${item.level
                ? item.level
                : '1'} ${item.name}"
            >
              <a
                @click="${this._handleNavigationClickEvent}"
                href="#${item.name}"
                >${item.title}</a
              >
            </div>`
        )}
      </div>
    `;
  }

  private _handleScrollEvent = () => {
    this._setActiveNavItem();
  };

  private _handleResizeEvent = () => {
    this._buildNavigation();
    this._setActiveNavItem();
  };

  private _handleNavigationClickEvent(event: Event) {
    const target = event.target as HTMLAnchorElement;
    const namedAnchor = target.getAttribute('href')?.replace('#', '');
    const destinationElement = this.querySelector(`[name="${namedAnchor}"]`);
    const pixelsFromTop = window.scrollY;

    if (destinationElement instanceof HTMLElement) {
      const destination = destinationElement.offsetTop - this.offset;
      window.scrollTo({ top: destination, behavior: 'smooth' });
    }
  }

  override render() {
    return html`
      <div class="kd-left-column-navigation kd-grid">
        <div class="left-nav kd-grid__col--lg-3">${this.navItems}</div>
        <div class="content kd-grid__col--lg-7">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

class leftNavItem {
  name = '';
  title = '';
  level = '';
  offset = 0;
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-left-column-navigation': LeftColumnNavigation;
  }
}
