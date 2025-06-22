import type { Classes } from '../../types';
import { styleImage } from './style-image';
import { styleMark } from './style-mark';
import { styleTitle } from './style-title';
import { styleUnstyledArrow } from './style-unstyled-arrow';
import { styleUnstyledBackdrop } from './style-unstyled-backdrop';
import { styleUnstyledBox } from './style-unstyled-box';
import { styleUnstyledButton } from './style-unstyled-button';
import { styleUnstyledFlexBox } from './style-unstyled-flex-box';
import { styleUnstyledGrid } from './style-unstyled-grid';
import { styleUnstyledPopper } from './style-unstyled-popper';
import { styleUnstyledRipple } from './style-unstyled-ripple';
import { styleUnstyledSpinner } from './style-unstyled-spinner';
import { styleUnstyledTrail } from './style-unstyled-trail';
import { styleUnstyledTransition } from './style-unstyled-transition';
import { styleUnstyledTypography } from './style-unstyled-typography';

const componentsClasses = {
  image: styleImage,
  mark: styleMark,
  title: styleTitle,
  unstyledArrow: styleUnstyledArrow,
  unstyledBackdrop: styleUnstyledBackdrop,
  unstyledBox: styleUnstyledBox,
  unstyledButton: styleUnstyledButton,
  unstyledFlexBox: styleUnstyledFlexBox,
  unstyledGrig: styleUnstyledGrid,
  unstyledPopper: styleUnstyledPopper,
  unstyledRipple: styleUnstyledRipple,
  unstyledSpinner: styleUnstyledSpinner,
  unstyledTrail: styleUnstyledTrail,
  unstyledTransition: styleUnstyledTransition,
  unstyledTypography: styleUnstyledTypography
};

export const mergeClassName = (
  component: keyof typeof componentsClasses,
  className?: string,
  classes?: Classes
) => componentsClasses[component](className ?? '', classes ?? {});
