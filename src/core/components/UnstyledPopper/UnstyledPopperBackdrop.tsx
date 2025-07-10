import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { portNode } from '../../../utils/utils/port-node/port-node';
import type { MergeComponentProps, Peak, AnimationProps } from '../../types';
import { mergeBackdropStyle } from '../../utils/merge-backdrop-style/merge-backdrop-style';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { setAria } from '../../utils/set-aria/set-aria';

type Props = MergeComponentProps<
  'div',
  {
    open: boolean;
    animation: Animation;
    peak: Peak;
    zIndex: number;
    invisible: boolean;
    blur: boolean;
    duration: number;
    onClose?: VoidFunction;
    portalEl: Element | null;
    animationProps?: AnimationProps;
  }
>;

export const UnstyledPopperBackdrop = ({
  open,
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
  animationProps,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledPopperBackdrop', className, {
    invisible,
    blur
  });

  const mergedStyle = mergeBackdropStyle(
    open,
    animation,
    peak,
    zIndex,
    duration,
    style,
    animationProps
  );

  return portNode(
    <div
      className={mergedClassName}
      style={mergedStyle}
      {...setAria('icon')}
      onClick={combineHandlers(onClick, onClose)}
      {...restProps}
    />,
    portalEl
  );
};
