import { cloneElement } from 'react';
import type {
  MergeComponentProps,
  Variant,
  DefaultPlacement,
  ArrowOffset,
  Color,
  SVGNodeProps
} from '../../types';
import { mergeArrowStyle } from '../../utils/merge-arrow-style/merge-arrow-style';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeClasses } from '../../utils/merge-class-name/merge-classes';

type Props = MergeComponentProps<
  'svg',
  {
    variant: Variant;
    placement: DefaultPlacement;
    offset: ArrowOffset;
    border: boolean;
    color: Color;
    children?: SVGNodeProps;
  }
>;

export const UnstyledPopperArrow = ({
  variant,
  placement: defaultPlacement,
  offset,
  border,
  color,
  className,
  style,
  children,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName(
    'unstyledPopperArrow',
    mergeClasses(children?.props.className, className),
    {
      variant,
      defaultPlacement,
      border,
      color
    }
  );

  const mergedStyle = mergeArrowStyle(
    defaultPlacement,
    offset,
    children?.props.style,
    style
  );

  if (children) {
    return cloneElement(children, {
      className: mergedClassName,
      style: mergedStyle,
      'aria-hidden': true,
      ...restProps
    });
  }

  return (
    <svg
      viewBox="0 0 8 8"
      width="8"
      height="8"
      className={mergedClassName}
      style={mergedStyle}
      aria-hidden="true"
      {...restProps}
    >
      <polygon points="0,8 8,8 4,3" />
    </svg>
  );
};
