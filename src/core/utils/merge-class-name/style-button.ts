import { unstyledButtonConfig } from '../../components/UnstyledButton/unstyledButtonConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor, getCheckableColor } from './color';
import { mergeClasses } from './merge-classes';
import { getFocusableState, getLoadingState } from './state';

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
  const colors = getColor(variant, getCheckableColor(color, checked), disabled);

  return mergeClasses(
    checked && unstyledButtonConfig.styles.root.checked,
    sharedStyles.position.relative,
    sharedStyles.focusable[getFocusableState(disabled, loading)],
    disabled && systemStyles.color.bg[theme][colors.bg],
    disabled && systemStyles.color.text[theme][colors.text],
    disabled && systemStyles.color.fill[theme][colors.text],
    systemStyles.color.ring[theme][colors.bg],
    unstyledButtonConfig.styles.root.loading[getLoadingState(loading)],
    sharedStyles.effect[effect],
    className
  );
};
