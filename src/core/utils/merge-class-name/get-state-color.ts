type ColorType = Record<'bg' | 'text' | 'ring', string>;

export const getStateColor = <T extends ColorType | string>(
  defaultColor: T,
  uncheckedColor: T,
  checkedColor: T,
  isDisabled: boolean,
  isChecked?: boolean
): T =>
  isChecked && isDisabled
    ? checkedColor
    : isChecked !== undefined
    ? uncheckedColor
    : defaultColor;
