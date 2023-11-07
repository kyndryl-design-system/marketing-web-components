import DocumentationTemplate from './DocumentationTemplate.mdx';
import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json';

import './global.scss?global';

import '../src/scss/utility/index.scss?global';

export default {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: DocumentationTemplate,
    },
    backgrounds: { disable: true },
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: '', color: '#fff' },
        {
          name: 'darkstone',
          class: 'kd-component-palette--darkstone',
          color: '#3d3c3c',
        },
        {
          name: 'spruce dark',
          class: 'kd-component-palette--spruce-dark',
          color: '#163d43',
        },
        {
          name: 'spruce',
          class: 'kd-component-palette--spruce',
          color: ' 	#29707a',
        },
        {
          name: 'dark green',
          class: 'kd-component-palette--darkgreen',
          color: '#187e3f',
        },
        {
          name: 'light green',
          class: 'kd-component-palette--lightgreen',
          color: '#4cdd84',
        },
        {
          name: 'warm red',
          class: 'kd-component-palette--warmred',
          color: '#ff462d',
        },
        {
          name: 'cloud',
          class: 'kd-component-palette--cloud',
          color: '#f2f1ee',
        },
        {
          name: 'skye',
          class: 'kd-component-palette--skye',
          color: '#e4f4f1',
        },
      ],
    },
  },
};

setCustomElementsManifest(customElements);
