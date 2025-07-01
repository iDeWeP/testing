import type { Classes } from '../../types';
import { styleUnstyledBox } from './style-unstyled-box';
import { styleUnstyledButton } from './style-unstyled-button';
import { styleUnstyledCheckbox } from './style-unstyled-checkbox';
import { styleUnstyledCheckboxContainer } from './style-unstyled-checkbox-container';
import { styleUnstyledCheckboxIcon } from './style-unstyled-checkbox-icon';
import { styleUnstyledCheckboxTrail } from './style-unstyled-checkbox-trail';
import { styleUnstyledFlex } from './style-unstyled-flex';
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
  unstyledBox: styleUnstyledBox,
  unstyledButton: styleUnstyledButton,
  unstyledCheckboxContainer: styleUnstyledCheckboxContainer,
  unstyledCheckboxIcon: styleUnstyledCheckboxIcon,
  unstyledCheckboxTrail: styleUnstyledCheckboxTrail,
  unstyledCheckbox: styleUnstyledCheckbox,
  unstyledFlex: styleUnstyledFlex,
  unstyledGrid: styleUnstyledGrid,
  unstyledPopperArrow: styleUnstyledPopperArrow,
  unstyledPopperBackdrop: styleUnstyledPopperBackdrop,
  unstyledPopper: styleUnstyledPopper,
  unstyledRipple: styleUnstyledRipple,
  unstyledSpinnerTrail: styleUnstyledSpinnerTrail,
  unstyledSpinner: styleUnstyledSpinner,
  unstyledTransition: styleUnstyledTransition,
  unstyledTypography: styleUnstyledTypography
};

export const mergeClassName = (
  component: keyof typeof componentsClasses,
  className?: string,
  classes?: Classes
) => componentsClasses[component](className ?? '', classes ?? {});
