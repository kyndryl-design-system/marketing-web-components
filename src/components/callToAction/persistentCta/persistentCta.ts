import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@kyndryl-design-system/shidoka-foundation/components/icon';
import downloadIcon from '@carbon/icons/es/download/16';
import stylesheet from './persistentCta.scss';

@customElement('kd-persistent-cta')
export class PersistentCta extends LitElement {
	static override styles = stylesheet;

	/** Brief text that invites the reader to download the entire article or paper. Max character count: 28 */
	@property({ type: String })
	ctaText = '';

	/** URL of the downloadable article or paper. */
	@property({ type: String })
	ctaLink = '';

	/** Open the download in a new window. */
	@property({ type: Boolean })
	openNewWindow = true;

	/** A brief explanation of the entire article or paper used to pique the interest of the reader. Max character count: 120 */
	@property({ type: String })
	bodyText = '';

	override render() {
		return html`
			<div class="kd-persistent-cta-container kd-grid-container">
				<a class="kd-persistent-cta" href="${this.ctaLink}" ${this.openNewWindow ? 'target="_blank"' : ''}>
					<span class="kd-persistent-cta-label">
						<span class="kd-persistent-cta-label-border"></span>
						<span class="kd-persistent-cta-label-text">${this.ctaText}</span>
						<span class="kd-persistent-cta-label-icon">
							<kd-icon .icon="${downloadIcon}"></kd-icon>
						</span>
					</span>
					<span class="kd-persistent-cta-desc">${this.bodyText}</span>
				</a>
			</div>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'kd-persistent-cta': PersistentCta;
	}
}
