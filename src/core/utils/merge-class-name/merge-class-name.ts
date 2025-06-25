import type { Classes } from '../../types';
import { styleUnstyledBox } from './style-unstyled-box';
import { styleUnstyledButton } from './style-unstyled-button';
import { styleUnstyledFlexBox } from './style-unstyled-flex-box';
import { styleUnstyledPopper } from './style-unstyled-popper';
import { styleUnstyledPopperArrow } from './style-unstyled-popper-arrow';
import { styleUnstyledPopperBackdrop } from './style-unstyled-popper-backdrop';
import { styleUnstyledRipple } from './style-unstyled-ripple';
import { styleUnstyledSpinner } from './style-unstyled-spinner';
import { styleUnstyledSpinnerTrail } from './style-unstyled-spinner-trail';
import { styleUnstyledTransition } from './style-unstyled-transition';
import { styleUnstyledTypography } from './style-unstyled-typography';

const componentsClasses = {
  unstyledPopperArrow: styleUnstyledPopperArrow,
  unstyledPopperBackdrop: styleUnstyledPopperBackdrop,
  unstyledBox: styleUnstyledBox,
  unstyledButton: styleUnstyledButton,
  unstyledFlexBox: styleUnstyledFlexBox,
  unstyledPopper: styleUnstyledPopper,
  unstyledRipple: styleUnstyledRipple,
  unstyledSpinner: styleUnstyledSpinner,
  unstyledSpinnerTrail: styleUnstyledSpinnerTrail,
  unstyledTransition: styleUnstyledTransition,
  unstyledTypography: styleUnstyledTypography
};

export const mergeClassName = (
  component: keyof typeof componentsClasses,
  className?: string,
  classes?: Classes
) => componentsClasses[component](className ?? '', classes ?? {});
