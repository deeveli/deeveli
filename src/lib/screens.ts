import resolveConfig from 'tailwindcss/resolveConfig';
import type { Config } from 'tailwindcss/types/config';

import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig as unknown as Config);

const breakpoints = fullConfig?.theme?.screens || {
  xs: '320px', // mobile alternative
  sm: '640px', // mobile
  md: '768px', // tablet
  lg: '1024px', // laptop small
  xl: '1440px', // laptop large
  '2xl': '2560px', // 2k, 4k
};

type BreakpointKey = keyof typeof breakpoints;

const getBreakpointValue = (bp: BreakpointKey) => breakpoints[bp];

export const min = (bp: BreakpointKey): string =>
  `@media only screen and (min-width: ${getBreakpointValue(bp)})`;

export const max = (bp: BreakpointKey): string =>
  `@media only screen and (max-width: ${getBreakpointValue(bp)})`;

export const between = (bpMin: BreakpointKey, bpMax: BreakpointKey): string =>
  `@media only screen and (min-width: ${getBreakpointValue(
    bpMin
  )}) and (max-width: ${getBreakpointValue(bpMax)})`;
