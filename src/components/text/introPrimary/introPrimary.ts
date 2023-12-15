import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@kyndryl-design-system/shidoka-foundation/components/link';
import '@kyndryl-design-system/shidoka-foundation/components/icon';
import chevronRightIcon from '@carbon/icons/es/chevron--right/16';
import { INTRO_PRIMARY_TITLE_COLOR } from './defs';
import stylesheet from './introPrimary.scss';

/**
 * @slot text - Slot for description text. Character count: 450-550
 */
@customElement('kd-intro-primary')
export class IntroPrimary extends LitElement {
	static override styles = stylesheet;

	/** The main point to be elaborated upon throughout the rest of the page. Character count: 50-80 */
	@property({ type: String })
	introTitle = '';

	/** Title color. Darkstone (default) or Spruce. */
	@property({ type: String })
	introTitleColor = INTRO_PRIMARY_TITLE_COLOR.DARKSTONE;

	/** CTA text. */
	@property({ type: String })
	ctaText = '';

	/** URL of the CTA. */
	@property({ type: String })
	ctaLink = '';

	renderCta(layout: String) {
		const classLayout = layout === 'mobile' ?
			'kd-visibility--hidden-lg kd-visibility--hidden-xl kd-visibility--hidden-max' :
			'kd-visibility--hidden-sm kd-visibility--hidden-md';
		if (this.ctaLink) {
			return html`
				<div class="${classLayout} kd-spacing--margin-top-40">
					<kd-link
						href="${this.ctaLink}"
						target="_self"
						kind="secondary"
						standalone
					>
						${this.ctaText}
						<kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>
					</kd-link>
				</div>
			`;
		} else {
			return null;
		}
	}

	override render() {
		const classTitleColor = this.introTitleColor === INTRO_PRIMARY_TITLE_COLOR.SPRUCE ? 'title-color-spruce' : '';

		return html`
			<div class="kd-intro-primary kd-spacing--page-gutter kd-component-palette--cloud">
				<div class="kd-intro-primary--grid kd-grid kd-spacing--padding-bottom-40 kd-spacing--padding-top-40">
					<div class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-5">
						<h2 class="kd-type--headline-06 ${classTitleColor}">${this.introTitle}</h2>
						${this.renderCta('desktop')}
					</div>
					<div class="kd-intro-primary--text kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-6">
						<slot name="text"></slot>
						${this.renderCta('mobile')}
					</div>
				</div>
			</div>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'kd-intro-primary': IntroPrimary;
	}
}
