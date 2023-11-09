import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './image';
import '../EventSingleBase/eventSingleBase';
import stylesheet from './eventSingleComponent.scss';

@customElement('kd-event-single-component')
export class EventSingleComponent extends LitElement {
  static override styles = [stylesheet];
  @property({ type: String }) mediaPosition = 'left';
  @property({ type: String }) bleedMedia = 'false';
  @property({ type: String }) buttonLabel = '';
  @property({ type: String }) buttonLink = '';
  @property({ type: String }) buttonType = 'primary-web';
  @property({ type: String }) headlineText = '';
  @property({ type: String }) eyebrowText = '';
  @property({ type: String }) eventSingleBaseComponent = 'true';
  @property({ type: String }) date = '';
  @property({ type: String }) time = '';
  @property({ type: String }) location = '';

  get imageAltTemp() {
    return html` <kd-image
      mediaPosition="${this.mediaPosition}"
      bleedmedia="${this.bleedMedia}"
      headlineText="${this.headlineText}"
      eyebrowtext="${this.eyebrowText}"
      buttonLabel="${this.buttonLabel}"
      buttonLink="${this.buttonLink}"
      eventSingleBaseComponent="${this.eventSingleBaseComponent}"
      date="${this.date}"
      location="${this.location}"
      time="${this.time}"
    >
      <div slot="media">
        <img
          src="https://s7d1.scene7.com/is/image/kyndryl/ls_windingriver_16x9?qlt=85&amp;wid=1200&amp;ts=1650983065999&amp;dpr=off"
          alt="image alt text"
          class="kd-layout__aspect-ratio--16x9 kd-layout__object-fit--cover cover"
        />
      </div>
      <div slot="text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu facilisi
          pellentesque morbi molestie sed ut at sed ac. Semper tortor feugiat
          non sem eget libero. Risus semper facilisis convallis vitae.
        </p>
      </div>
    </kd-image>`;
  }

  override render() {
    return html` ${this.imageAltTemp} `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-event-single-component': EventSingleComponent;
  }
}
