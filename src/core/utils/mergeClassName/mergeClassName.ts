import type { Classes } from '../../types';
import { styleImage } from './styleImage';
import { styleMark } from './styleMark';
import { styleUnstyledPopper } from './stylePopper';
import { styleTitle } from './styleTitle';
import { styleUnstyledBox } from './styleUnstyledBox';
import { styleUnstyledFlexBox } from './styleUnstyledFlexBox';
import { styleUnstyledTransition } from './styleUnstyledTransition';
import { styleUnstyledTypography } from './styleUnstyledTypography';

const componentsClasses = {
  image: styleImage,
  mark: styleMark,
  title: styleTitle,
  unstyledBox: styleUnstyledBox,
  unstyledFlexBox: styleUnstyledFlexBox,
  unstyledPopper: styleUnstyledPopper,
  unstyledTransition: styleUnstyledTransition,
  unstyledTypography: styleUnstyledTypography
};

export const mergeClassName = (
  component: keyof typeof componentsClasses,
  className: string,
  classes?: Classes
) => componentsClasses[component](className, classes ?? {});
