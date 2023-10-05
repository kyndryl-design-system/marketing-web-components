import { html } from 'lit';
import { Button } from '@kyndryl-design-system/shidoka-foundation';
import { Link } from '@kyndryl-design-system/shidoka-foundation';
import chevronRightIcon from '@carbon/icons/es/chevron--right/20';

export default {
  title: 'Shidoka Content/Component Palettes',
  decorators: [
    (story) =>
      html`
        <style>
          .component-paletted-container {
            background: var(--kd-color-background-ui-default);
            color: var(--kd-color-text-primary);
            padding: 3em;
          }

          .component-paletted-container .color-box {
            width: 100%;
            max-width: 100px;
            height: 100px;
            margin-right: 2em;
            display: inline-block;
          }
          .primary-color {
            background: var(--kd-color-background-accent-primary);
          }

          .secondary-color {
            background: var(--kd-color-background-accent-secondary);
          }

          .tertiary-color {
            background: var(--kd-color-background-accent-tertiary);
          }
        </style>
        ${story()}
      `,
  ],
};

export const Example = {
  render: () => {
    return html`
      <div class="kd-component-palette--darkstone-80">
        <div class="component-paletted-container">
          <h3>Component</h3>
          <h4>Button</h4>
          <kd-button
            kind="primary-app"
            type="button"
            size="medium"
            iconposition="right"
            description=""
            href=""
          >
            Primary Button
            <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>
          </kd-button>
          <kd-button
            kind="secondary"
            type="button"
            size="medium"
            iconposition="right"
            description=""
            href=""
          >
            Secondary Button
            <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>
          </kd-button>
          <kd-button
            kind="tertiary"
            type="button"
            size="medium"
            iconposition="right"
            description=""
            href=""
          >
            Tertiary Button
            <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>
          </kd-button>
          <h4>Link</h4>
          <kd-link
            target="_self"
            kind="secondary"
            href="https://www.kyndryl.com"
          >
            Standalone Link
            <kd-icon slot="icon" .icon=${chevronRightIcon}>></kd-icon>
          </kd-link>
          <h4>Accent Colors</h4>
          <div class="color-box primary-color"></div>
          <div class="color-box secondary-color"></div>
          <div class="color-box tertiary-color"></div>
        </div>
      </div>
    `;
  },
};
