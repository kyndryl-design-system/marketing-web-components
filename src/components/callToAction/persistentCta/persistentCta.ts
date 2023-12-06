import { html, LitElement } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';

import '@kyndryl-design-system/shidoka-foundation/components/icon';
import { BREAKPOINTS } from '@kyndryl-design-system/shidoka-foundation/common/defs/breakpoints';
import { getCurrentBreakpoint } from '@kyndryl-design-system/shidoka-foundation/common/helpers/breakpoints';
import downloadIcon20 from '@carbon/icons/es/download/20';
import downloadIcon32 from '@carbon/icons/es/download/32';
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

	/**
	 * Used to render different icon size for mobile
	 * @ignore
	 */
	@state()
	isMobile = true;

	override connectedCallback() {
		super.connectedCallback();
		this.getBreakpoint();
		window.addEventListener('resize', () => {
			this.getBreakpoint();
		});
	}

	/**
	 * Check if current breakpoint is mobile for icon resizing
	 * @ignore
	 */
	private getBreakpoint() {
		const breakpoint = getCurrentBreakpoint();
		this.isMobile = breakpoint === BREAKPOINTS.SM || breakpoint === BREAKPOINTS.MD;
	}

	/**
	 * Render different size icon per breakpoint
	 * @ignore
	 */
	private get renderIcon() {
		if (this.isMobile) {
			return html`<kd-icon .icon="${downloadIcon32}"></kd-icon>`;
		} else {
			return html`<kd-icon .icon="${downloadIcon20}"></kd-icon>`;
		}
	}

	override render() {
		return html`
			<div class="kd-persistent-cta-container kd-spacing--page-gutter">
				<div class="kd-grid">
				<a class="kd-persistent-cta" href="${this.ctaLink}" ${this.openNewWindow ? 'target="_blank"' : ''}>
					<span class="kd-persistent-cta-label">
						<span class="kd-persistent-cta-label-border"></span>
						<span class="kd-persistent-cta-label-text">${this.ctaText}</span>
						<span class="kd-persistent-cta-label-icon">
							${this.renderIcon}
						</span>
					</span>
					<span class="kd-persistent-cta-desc">${this.bodyText}</span>
				</a>
				</div>
			</div>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'kd-persistent-cta': PersistentCta;
	}
}
