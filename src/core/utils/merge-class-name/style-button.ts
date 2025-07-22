import { unstyledButtonConfig } from '../../components/UnstyledButton/unstyledButtonConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { getColor } from './get-color';
import { getFocusableState } from './get-focusable-state';
import { getStateColor } from './get-state-color';
import { mergeClasses } from './merge-classes';

export const styleButton = (
  className: string,
  {
    theme = 'light',
    checked,
    loading = false,
    disabled = false,
    variant = 'solid',
    color = 'unset',
    effect = 'unset'
  }: Classes
): ClassName => {
  const isCheckable = checked !== undefined && !disabled;
  const isLoading = loading === true;
  const focusable = getFocusableState({ disabled, loading });
  const defaultColorType = getColor(variant, color, { disabled });
  const uncheckedColorType = getColor(variant, color, { disabled }, false);
  const checkedColorType = getColor(variant, color, { disabled }, true);
  const colorType = getStateColor(
    defaultColorType,
    uncheckedColorType,
    checkedColorType,
    disabled,
    checked
  );

  return mergeClasses(
    checked && sharedStyles.state.on,
    sharedStyles.position.relative,
    sharedStyles.focusable[focusable],
    disabled && systemStyles.color.default.bg[theme][colorType.bg],
    disabled && systemStyles.color.default.text[theme][colorType.text],
    disabled && systemStyles.color.default.fill[theme][colorType.text],
    !loading && systemStyles.color.default.ring[theme][colorType.ring],
    isCheckable && systemStyles.color.on.bg[theme][checkedColorType.bg],
    isCheckable && systemStyles.color.on.text[theme][checkedColorType.text],
    isCheckable && systemStyles.color.on.fill[theme][checkedColorType.text],
    !loading &&
      isCheckable &&
      systemStyles.color.on.ring[theme][checkedColorType.ring],
    isLoading && unstyledButtonConfig.styles.root.loading.normal,
    isLoading &&
      isCheckable &&
      unstyledButtonConfig.styles.root.loading.checkable,
    sharedStyles.effect[effect],
    isCheckable && sharedStyles.transition.color,
    className
  );
};
