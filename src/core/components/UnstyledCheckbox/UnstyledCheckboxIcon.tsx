import {
  type ReactElement,
  type ComponentPropsWithRef,
  cloneElement
} from 'react';
import type {
  MergeComponentProps,
  Variant,
  Size,
  Radius,
  Color
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'svg',
  {
    inputType: 'checkbox' | 'radio';
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    variant: Variant;
    size: Size;
    border: boolean;
    radius: Radius;
    color: Color;
    children?: ReactElement<ComponentPropsWithRef<'svg'>>;
  }
>;

export const UnstyledCheckboxIcon = ({
  type,
  valid,
  invalid,
  disabled,
  variant,
  size,
  border,
  radius,
  color,
  className,
  children,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName(
    'unstyledCheckboxIcon',
    `${className} ${children?.props.className}`,
    {
      valid,
      invalid,
      disabled,
      variant,
      size,
      border,
      radius,
      color
    }
  );

  if (children) {
    return cloneElement(children, {
      className: mergedClassName,
      'aria-hidden': true,
      ...restProps
    });
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={mergedClassName}
      aria-hidden="true"
      {...restProps}
    >
      {type === 'checkbox' && (
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      )}
      {type === 'radio' && (
        <circle
          cx="12"
          cy="12"
          r={variant === 'plain' || variant === 'text' ? '8' : '4'}
        />
      )}
    </svg>
  );
};
