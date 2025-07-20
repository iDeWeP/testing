import { unstyledButtonConfig } from '../../components/UnstyledButton/unstyledButtonConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
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
) => {
  const state = !loading ? 'none' : loading === true ? 'hide' : 'normal';
  const isCheckable = checked !== undefined && !disabled;
  const defaultColors = getColor(variant, color, { disabled });
  const uncheckedColors = getColor(variant, color, { disabled }, false);
  const checkedColors = getColor(variant, color, { disabled }, true);
  const colors = getStateColor(
    defaultColors,
    uncheckedColors,
    checkedColors,
    disabled,
    checked
  );

  return mergeClasses(
    checked && sharedStyles.state.on,
    sharedStyles.position.relative,
    sharedStyles.focusable[getFocusableState(disabled, loading)],
    disabled && systemStyles.color.normal.bg[theme][colors.bg],
    disabled && systemStyles.color.normal.text[theme][colors.text],
    disabled && systemStyles.color.normal.fill[theme][colors.text],
    systemStyles.color.normal.ring[theme][colors.ring],
    isCheckable && systemStyles.color.on.bg[theme][checkedColors.bg],
    isCheckable && systemStyles.color.on.text[theme][checkedColors.text],
    isCheckable && systemStyles.color.on.fill[theme][checkedColors.text],
    isCheckable && systemStyles.color.on.ring[theme][checkedColors.ring],
    unstyledButtonConfig.styles.root.loading[state],
    sharedStyles.effect[effect],
    className
  );
};
