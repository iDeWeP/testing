import { cloneElement } from 'react';
import type {
  MergeComponentProps,
  Variant,
  Size,
  Radius,
  Color,
  SVGNodeProps
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'svg',
  {
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    inputType: 'checkbox' | 'radio';
    variant: Variant;
    size: Size;
    border: boolean;
    radius: Radius;
    color: Color;
    children?: SVGNodeProps;
  }
>;

export const UnstyledCheckboxIcon = ({
  valid,
  invalid,
  disabled,
  inputType,
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
      {inputType === 'checkbox' && (
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      )}
      {inputType === 'radio' && (
        <circle
          cx="12"
          cy="12"
          r={variant === 'plain' || variant === 'text' ? '8' : '4'}
        />
      )}
    </svg>
  );
};
