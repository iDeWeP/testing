import { cloneElement } from 'react';
import type {
  MergeComponentProps,
  Variant,
  DefaultPlacement,
  ArrowOffset,
  Border,
  DefaultBorder,
  Color,
  SVGNodeProps
} from '../../types';
import { mergeArrowStyle } from '../../utils/merge-arrow-style/merge-arrow-style';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeClasses } from '../../utils/merge-class-name/merge-classes';
import { setAria } from '../../utils/set-aria/set-aria';

type Props = MergeComponentProps<
  'svg',
  {
    variant: Variant;
    placement: DefaultPlacement;
    offset: ArrowOffset;
    border: Border;
    bx: DefaultBorder;
    by: DefaultBorder;
    bt: DefaultBorder;
    bb: DefaultBorder;
    bl: DefaultBorder;
    br: DefaultBorder;
    color: Color;
    children?: SVGNodeProps;
  }
>;

export const UnstyledPopperArrow = ({
  variant,
  placement: defaultPlacement,
  offset,
  border,
  bx,
  by,
  bt,
  bb,
  bl,
  br,
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
      bx,
      by,
      bt,
      bb,
      bl,
      br,
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
      ...setAria('icon'),
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
      {...setAria('icon')}
      {...restProps}
    >
      <polygon points="0,8 8,8 4,3" />
    </svg>
  );
};
