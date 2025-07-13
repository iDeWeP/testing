import { unstyledButtonConfig } from '../../components/UnstyledButton/unstyledButtonConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor, getCheckableColor } from './color';
import { mergeClasses } from './merge-classes';
import { getFocusableState, getLoadingState } from './state';

export const styleUnstyledButton = (
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
  const { bgColor, textColor } = getColor(
    variant,
    getCheckableColor(color, checked),
    disabled
  );

  return mergeClasses(
    checked && unstyledButtonConfig.styles.root.checked,
    unstyledButtonConfig.styles.root.default,
    sharedStyles.focusable[getFocusableState(disabled, loading)],
    disabled && systemStyles.color.bg[theme][bgColor],
    disabled && systemStyles.color.text[theme][textColor],
    disabled && systemStyles.color.fill[theme][textColor],
    systemStyles.color.ring[theme][bgColor],
    unstyledButtonConfig.styles.root.loading[getLoadingState(loading)],
    sharedStyles.effect[effect],
    className
  );
};
