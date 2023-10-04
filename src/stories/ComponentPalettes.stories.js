import { html } from 'lit';
import { Button } from '@kyndryl-design-system/shidoka-foundation';

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
          <kd-button kind="primary-web">Primary Web</kd-button>
          <kd-button kind="secondary">Secondary</kd-button>
          <kd-button kind="tertiary">Tertiary</kd-button>
          <h4>Accent Colors</h4>
          <div class="color-box primary-color"></div>
          <div class="color-box secondary-color"></div>
          <div class="color-box tertiary-color"></div>
        </div>
      </div>
    `;
  },
};
