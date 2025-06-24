import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledRipple } from '../UnstyledRipple/UnstyledRipple';
import type { UnstyledCheckboxProps } from './UnstyledCheckbox.types';
import { unstyledCheckboxConfig } from './unstyledCheckboxConfig';
import { UnstyledCheckboxContainer } from './UnstyledCheckboxContainer';
import { UnstyledCheckboxIcon } from './UnstyledCheckboxIcon';
import { UnstyledCheckboxTrail } from './UnstyledCheckboxTrail';

export const UnstyledCheckbox = (props: UnstyledCheckboxProps) => {
  const {
    ref: forwardedRef,
    inputRef,
    checked,
    valid,
    invalid,
    disabled,
    type,
    variant,
    size,
    margin,
    border,
    radius,
    color,
    className,
    componentsProps,
    ripple,
    children,
    ...restProps
  } = mergeProps(unstyledCheckboxConfig.props, props);

  const mergedClassName = mergeClassName('unstyledInput', className, {
    disabled
  });

  return (
    <UnstyledCheckboxContainer
      ref={forwardedRef}
      size={size}
      margin={margin}
      hasRipple={ripple !== 'none'}
      {...componentsProps.container}
    >
      <input
        ref={inputRef}
        checked={checked}
        disabled={disabled}
        type={type}
        className={mergedClassName}
        {...restProps}
      />
      {!disabled && ripple !== 'none' && (
        <UnstyledRipple
          valid={valid}
          invalid={invalid}
          stateful
          variant={variant}
          color={color}
          effect={ripple}
          {...componentsProps.ripple}
        />
      )}
      <UnstyledCheckboxTrail
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        size={size}
        radius={radius}
        {...componentsProps.trail}
      />
      <UnstyledCheckboxIcon
        inputType={type}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        variant={variant}
        size={size}
        border={border}
        radius={radius}
        color={color}
        {...componentsProps.icon}
      >
        {children}
      </UnstyledCheckboxIcon>
    </UnstyledCheckboxContainer>
  );
};
