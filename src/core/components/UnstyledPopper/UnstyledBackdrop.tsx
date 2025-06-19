import type { Animation } from '../../../hooks/hooks/use-animation/useAnimation';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combineHandlers';
import { portElement } from '../../../utils/utils/port-element/portElement';
import type { MergeComponentProps, Peak, TransitionProps } from '../../types';
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
    duration: number;
    onClose?: VoidFunction;
    portalEl: Element | null;
    transitionProps?: TransitionProps;
  }
>;

export const UnstyledBackdrop = ({
  isOpen,
  animation,
  peak,
  zIndex,
  invisible,
  blur,
  duration,
  className,
  style,
  onClose,
  onClick,
  portalEl,
  transitionProps,
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
    duration,
    style,
    transitionProps
  );

  const handleClick = combineHandlers(onClick, onClose);

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
