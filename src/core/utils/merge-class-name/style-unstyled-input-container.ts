import { unstyledInputConfig } from "../../components/UnstyledInput/unstyledInputConfig";
import { generic } from "../../config/generic";
import type { Classes } from "../../types";
import { getColor } from "./get-color";
import { getInputVariant } from "./get-input-variant";
import { mergeClasses } from "./merge-classes";


export const styleUnstyledInputContainer = (
  className: string,
  {
    focused = false,
    shifted = false,
    valid = false,
    invalid = false,
    disabled = false,
    inputVariant = 'default',
    inputSize = 'md',
    scale = 'normal',
    margin = 'none',
    color = 'neutral'
  }: Classes
) => {
  const { textVariant, focusedVariant } = getInputVariant(
    inputVariant,
    disabled,
    valid,
    invalid
  );
  const colorVariant = getColor(disabled, 'surface', valid, invalid);

  return mergeClasses(
    focused && generic.styles.state.focused,
    shifted && generic.styles.state.shifted,
    unstyledInputConfig.styles.root.default,
    unstyledInputConfig.styles.root.size[inputSize],
    generic.styles.scale[scale],
    generic.styles.margin[margin],
    generic.styles.color.text[colorVariant][textVariant],
    generic.styles.color.fill[colorVariant][textVariant],
    generic.styles.color.input[color][focusedVariant],
    disabled && generic.styles.focusable.disabled,
    className
  );
};
