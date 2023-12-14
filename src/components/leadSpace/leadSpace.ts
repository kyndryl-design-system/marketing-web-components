import { html, LitElement } from 'lit';
import { customElement, } from 'lit/decorators.js';
import stylesheet from './leadSpace.scss';
import chevronRightIcon from '@carbon/icons/es/chevron--right/20';

@customElement(`kd-leadspace`)
export class KdLeadSpace extends LitElement {
  static override styles = [stylesheet];

  override render() {
    return html` <div class="full-bleed-grid">
      <div>
        <h1 class="kd-type--headline-03">
          Nam neque nec scelerisque egestas nunc ut sem sit donec
        </h1>
        <p class="kd-type--body-01">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu facilisi
          pellentesque morbi molestie sed ut at sed ac. Semper tortor feugiat
          non sem eget libero.
        </p>

        <kd-button
          kind="primary-app"
          type="button"
          size="medium"
          iconposition="right"
          description=""
          href=""
        >
          <span class="kd-type--body-02"> Read the tech brief </span>
          <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>
        </kd-button>
        <kd-button
          kind="secondary"
          type="button"
          size="medium"
          iconposition="right"
          description=""
          href=""
          class="second-button"
        >
          <span class="kd-type--body-02"> Watch the video </span>
          <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>
        </kd-button>
      </div>
      <div class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-6 img">
        <img
          src="https://www.kyndryl.com/etc.clientlibs/kyndrylprogram/clientlibs/clientlib-site/resources/images/trellis.svg"
          alt="image alt text"
          class="kd-layout__aspect-ratio--16x9 kd-layout__object-fit--cover"
        />
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-leadspace': KdLeadSpace;
  }
}
