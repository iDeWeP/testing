import { generic } from '../../config/generic';
import type {
  Theme,
  DefaultVariant,
  Scale,
  Spacing,
  Border,
  Radius,
  DefaultColor
} from '../../types';
import getBgColor from './utils/get-bg-color/getBgColor';
import getBorderColor from './utils/get-border-color/getBorderColor';
import getBorder from './utils/get-border/getBorder';
import getTextColor from './utils/get-text-color/getTextColor';
import mergeClasses from './utils/merge-classes/mergeClasses';

type Config = {
  component: keyof typeof componentsClasses;
  className: string;
  configClassName?: string;
  theme: Theme;
};

type Classes = {
  defaultVariant: DefaultVariant;
  scale: Scale;
  spacing: Spacing;
  border: Border;
  radius: Radius;
  defaultColor: DefaultColor;
};

const box = (
  { theme, className, configClassName }: Config,
  { defaultVariant, scale, spacing, border, radius, defaultColor }: Classes
) => {
  const textColor = getTextColor(defaultVariant, defaultColor);

  return mergeClasses(
    generic.styles.scale[scale],
    generic.styles.spacing.default[spacing],
    generic.styles.border[getBorder(border)],
    generic.styles.radius.lg[radius],
    generic.styles.color.bg[theme][getBgColor(defaultVariant, defaultColor)],
    generic.styles.color.border[getBorderColor(defaultVariant, border)],
    generic.styles.color.text[theme][textColor],
    generic.styles.color.fill[theme][textColor],
    configClassName,
    className
  );
};

const componentsClasses = {
  box
};

export const mergeClassName = (config: Config, classes: Classes) =>
  componentsClasses[config.component](config, classes);
