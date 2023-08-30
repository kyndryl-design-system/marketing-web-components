import { html } from 'lit';

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
          <p>Accent Colors</p>
          <div class="color-box primary-color"></div>
          <div class="color-box secondary-color"></div>
          <div class="color-box tertiary-color"></div>
        </div>
      </div>
    `;
  },
};
