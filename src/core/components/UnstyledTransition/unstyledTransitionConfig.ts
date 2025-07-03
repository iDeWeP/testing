import type { ComponentConfig } from '../../types';
import type { UnstyledTransitionConfigProps } from './UnstyledTransition.types';

export const unstyledTransitionConfig: ComponentConfig<UnstyledTransitionConfigProps> =
  {
    props: {
      as: 'div',
      unmountOnExit: false,
      peak: 'auto',
      transition: 'fade',
      duration: 1000,
      transitionProps: {},
      variant: 'text',
      padding: 'none',
      px: 'none',
      py: 'none',
      pt: 'none',
      pb: 'none',
      pl: 'none',
      pr: 'none',
      margin: 'none',
      mx: 'none',
      my: 'none',
      mt: 'none',
      mb: 'none',
      ml: 'none',
      mr: 'none',
      border: false,
      radius: 'none',
      rt: 'none',
      rb: 'none',
      rl: 'none',
      rr: 'none',
      rtl: 'none',
      rtr: 'none',
      rbl: 'none',
      rbr: 'none',
      font: 'none',
      color: 'none',
      shadow: 'none',
      gap: 'none',
      gx: 'none',
      gy: 'none'
    }
  };
