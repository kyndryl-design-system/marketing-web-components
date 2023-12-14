/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html } from 'lit';
import './statsGroup';
import { createColorPaletteLabels, createOptionsArray,} from '../../../common/helpers/helpers';
import { COLOR_PALETTE_LABELS, COLOR_PALETTE_VALUES,} from '../../../common/defs/colorPalettes';
import { STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS, STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT,} from './def';

export default {
  title: 'Patterns/Stats Group',
  component: `kd-statsgroup`,
  argTypes: {
    stat: {
      control: { type: 'text' },
    },
    symbol: {
      control: { type: 'text' },
    },
    colorPalette: {
      description: 'Color palette',
      options: createOptionsArray(COLOR_PALETTE_VALUES),
      control: {
        type: 'select',
        labels: createColorPaletteLabels(
          COLOR_PALETTE_LABELS,
          COLOR_PALETTE_VALUES
        ),
      },
    },
    symbolPlacement: {
      control: { type: 'radio' },
      options: createOptionsArray(STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS),
    },
    symbolAlignment: {
      control: { type: 'radio' },
      options: createOptionsArray(STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT),
    },
  },
};

const args = {
  stat: '$100',
  symbol: 'M',
  symbolPlacement: STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.AFTER,
  symbolAlignment: STAT_CAROUSEL_SLIDE_SYMBOL_ALIGNMENT.CENTER,
  colorPalette: '',
};

export const Template = {
  args,
  render: ({ ...args }) => {
    return html`
      <kd-statsgroup
        stat="${args.stat}"
        colorPalette="${args.colorPalette}"
        symbol="${args.symbol}"
        symbolPlacement="${args.symbolPlacement}"
        symbolAlignment="${args.symbolAlignment}"
      >
        <p slot="text-one">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu facilisi
          pellentesque morbi molestie sed ut at sed ac. Semper tortor feugiat
          non sem eget libero. Risus semper facilisis convallis vitae.
        </p>

        <p class="kd-type--body-02 kd-type--weight-regular" slot="text-two">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu facilisi
          pellentesque morbi molestie sed ut at sed ac. Semper tortor feugiat
          non sem eget libero. Risus semper facilisis convallis vitae.
        </p>

        <p class="kd-type--body-02 kd-type--weight-regular" slot="text-three">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu facilisi
          pellentesque morbi molestie sed ut at sed ac. Semper tortor feugiat
          non sem eget libero. Risus semper facilisis convallis vitae.
        </p>
      </kd-statsgroup>
    `;
  },
};
