import {
  type ReactElement,
  type ComponentPropsWithRef,
  cloneElement
} from 'react';
import type {
  ComponentRefProps,
  MergeComponentProps,
  Variant,
  DefaultPlacement,
  Color
} from '../../types';
import { mergeArrowStyle } from '../../utils/mergeArrowStyle/mergeArrowStyle';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';

type ComponentProps = {
  polygon?: ComponentRefProps<'polygon'>;
};

type Props = MergeComponentProps<
  'svg',
  {
    variant: Variant;
    placement: DefaultPlacement;
    offset: [number | string, number | string];
    border: boolean;
    color: Color;
    componentProps: ComponentProps;
    children?: ReactElement<ComponentPropsWithRef<'svg'>>;
  }
>;

export const UnstyledArrow = ({
  variant,
  placement,
  offset,
  border,
  color,
  className,
  style,
  componentProps,
  children,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName(
    'unstyledArrow',
    `${className} ${children?.props.className}`,
    {
      variant,
      placement,
      border,
      color
    }
  );

  const mergedStyle = mergeArrowStyle(
    placement,
    offset,
    style,
    children?.props.style
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
      <polygon
        points="0,8 8,8 4,3"
        {...componentProps.polygon}
      />
    </svg>
  );
};
