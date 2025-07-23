import { unstyledButtonConfig } from '../../components/UnstyledButton/unstyledButtonConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { getColor } from './get-color';
import { getFocusableState } from './get-focusable-state';
import { mergeClasses } from './merge-classes';

export const styleButton = (
  className: string,
  {
    theme = 'light',
    loading = false,
    disabled = false,
    variant = 'solid',
    color = 'unset',
    effect = 'unset'
  }: Classes
): ClassName => {
  const isLoading = loading === true;
  const focusable = getFocusableState({ disabled, loading });
  const colorType = getColor(variant, color, { disabled });

  return mergeClasses(
    sharedStyles.position.relative,
    sharedStyles.focusable[focusable],
    disabled && systemStyles.color.default.bg[theme][colorType.bg],
    disabled && systemStyles.color.default.text[theme][colorType.text],
    disabled && systemStyles.color.default.fill[theme][colorType.text],
    !loading && systemStyles.color.default.ring[theme][colorType.ring],
    isLoading && unstyledButtonConfig.styles.root.loading,
    sharedStyles.effect[effect],
    className
  );
};
