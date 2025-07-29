import { unstyledButtonConfig } from '../../components/UnstyledButton/unstyledButtonConfig';
import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
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
  const focusable = getFocusableState({ loading, disabled });
  const autoColor = getColor(variant, color, { disabled });

  return mergeClasses(
    sharedStyle.position.relative,
    sharedStyle.focusable[focusable],
    systemStyle.color.default.bg[theme][autoColor.bg],
    systemStyle.color.default.text[theme][autoColor.text],
    systemStyle.color.default.fill[theme][autoColor.text],
    !loading && systemStyle.color.default.ring[theme][autoColor.ring],
    isLoading && unstyledButtonConfig.styles.root.loading,
    sharedStyle.effect[effect],
    className
  );
};
