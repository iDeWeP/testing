import type { Animation } from '../../../hooks/hooks/use-animation/useAnimation';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combineHandlers';
import { portElement } from '../../../utils/utils/port-element/portElement';
import type { MergeComponentProps, Peak } from '../../types';
import { mergeBackdropStyle } from '../../utils/mergeBackdropStyle/mergeBackdropStyle';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';

type Props = MergeComponentProps<
  'div',
  {
    isOpen: boolean;
    animation: Animation;
    peak: Peak;
    zIndex: number;
    invisible: boolean;
    blur: boolean;
    onClose?: VoidFunction;
    portalEl: Element | null;
  }
>;

export const UnstyledBackdrop = ({
  isOpen,
  animation,
  peak,
  zIndex,
  invisible,
  blur,
  className,
  style,
  onClose,
  onClick,
  portalEl,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledBackdrop', className, {
    invisible,
    blur
  });

  const mergedStyle = mergeBackdropStyle(
    isOpen,
    animation,
    peak,
    zIndex,
    style
  );

  const handleClick = combineHandlers(onClose, onClick);

  return portElement(
    <div
      className={mergedClassName}
      style={mergedStyle}
      onClick={handleClick}
      {...restProps}
    />,
    portalEl
  );
};
