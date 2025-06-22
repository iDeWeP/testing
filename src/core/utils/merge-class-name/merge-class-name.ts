import type { Classes } from '../../types';
import { styleImage } from './style-image';
import { styleMark } from './style-mark';
import { styleTitle } from './style-title';
import { styleUnstyledBox } from './style-unstyled-box';
import { styleUnstyledButton } from './style-unstyled-button';
import { styleUnstyledFlexBox } from './style-unstyled-flex-box';
import { styleUnstyledGrid } from './style-unstyled-grid';
import { styleUnstyledPopper } from './style-unstyled-popper';
import { styleUnstyledPopperArrow } from './style-unstyled-popper-arrow';
import { styleUnstyledPopperBackdrop } from './style-unstyled-popper-backdrop';
import { styleUnstyledRipple } from './style-unstyled-ripple';
import { styleUnstyledSpinner } from './style-unstyled-spinner';
import { styleUnstyledSpinnerTrail } from './style-unstyled-spinner-trail';
import { styleUnstyledTransition } from './style-unstyled-transition';
import { styleUnstyledTypography } from './style-unstyled-typography';

const componentsClasses = {
  image: styleImage,
  mark: styleMark,
  title: styleTitle,
  unstyledPopperArrow: styleUnstyledPopperArrow,
  unstyledPopperBackdrop: styleUnstyledPopperBackdrop,
  unstyledBox: styleUnstyledBox,
  unstyledButton: styleUnstyledButton,
  unstyledFlexBox: styleUnstyledFlexBox,
  unstyledGrid: styleUnstyledGrid,
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
