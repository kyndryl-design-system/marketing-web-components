/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html } from 'lit';
import './expertFeature';
import '../eyebrow';
import '@kyndryl-design-system/shidoka-foundation/components/button';
import chevronRightIcon from '@carbon/icons/es/chevron--right/20';
import twitterLogo from '@carbon/icons/es/logo--linkedin/24';

export default {
  title: 'Features/Expert Feature',
  component: `kd-expert-feature`,
  argTypes: {
    mediaSize: {
      control: { type: 'radio' },
      options: ['full', 'half'],
      description: 'Media full width or half width',
    },
  },
};

const args = {
  mediaSize: 'full',
};

export const expertFeature = {
  args,
  render: (args: any) => {
    return html`
      <kd-expert-feature mediaSize="${args.mediaSize}">    
          <img
            src="https://s7d1.scene7.com/is/image/kyndryl/ls_windingriver_16x9?qlt=85&amp;wid=1200&amp;ts=1650983065999&amp;dpr=off"
            alt="image alt text"
            class=""
            slot="media"
          />
        
        <div slot="eyebrow"><kd-eyebrow>Test</kd-eyebrow></div>
        <div slot="headline">How can governments use technology to transform citizen experiences?</div>
        <div slot="body-copy">
          <p>
            Regardless of where your agency is in its modernization journey,
            you’ll need to do three things well to deliver transformative
            citizen experiences:
          </p>
          <ol>
            <li>Pinpoint citizen experience problems.</li>
            <li>Focus on outcomes rather than output.</li>
            <li>
              Build private/public partnerships that enable co-creation and
              innovation.
            </li>
          </ol>
        </div>
        <div slot="cta">
          <kd-button
            kind="secondary"
            type="button"
            size="medium"
            iconposition="right"
            description=""
            href=""
          >
            Button Text
            <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>
          </kd-button>
        </div>

        </div>
        <div slot="expert-name">Tom Goodwin</div>
        <div slot="expert-title">
          Vice President, State and Local Government | United States
        </div>
        <div slot="social-media"><a href="https://www.linkedin.com"><kd-icon slot="icon" .icon=${twitterLogo}></kd-icon></a></div>
        <div slot="title">quick take</div>
      </kd-expert-feature>
    `;
  },
};
