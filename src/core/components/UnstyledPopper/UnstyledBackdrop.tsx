import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { portNode } from '../../../utils/utils/port-node/port-node';
import type { MergeComponentProps, Peak, TransitionProps } from '../../types';
import { mergeBackdropStyle } from '../../utils/merge-backdrop-style/merge-backdrop-style';
import { mergeClassName } from '../../utils/mergeClassName/merge-class-name';

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

  return portNode(
    <div
      className={mergedClassName}
      style={mergedStyle}
      onClick={combineHandlers(onClick, onClose)}
      {...restProps}
    />,
    portalEl
  );
};
