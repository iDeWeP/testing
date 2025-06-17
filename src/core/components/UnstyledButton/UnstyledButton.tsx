import type { ElementType } from "react";
import { mergeClassName } from "../../utils/mergeClassName/mergeClassName";
import { mergeProps } from "../../utils/mergeProps/mergeProps";
import { UnstyledRipple } from "../UnstyledRipple/UnstyledRipple";
import { UnstyledSpinner } from "../UnstyledSpinner/UnstyledSpinner";
import type { UnstyledButtonProps } from "./UnstyledButton.types";
import { unstyledButtonConfig } from "./unstyledButtonConfig";


export const UnstyledButton = <E extends ElementType = 'button'>(
  props: UnstyledButtonProps<E>
) => {
  const {
    loading,
    disabled: isDisabled,
    variant,
    size,
    scale,
    color,
    effect,
    className,
    componentsProps,
    ripple,
    leftDecorator,
    rightDecorator,
    children,
    ...restProps
  } = mergeProps(unstyledButtonConfig.props, props);

  const hasRipple = !loading && !isDisabled && ripple !== 'none';

  const mergedClassName = mergeClassName('unstyledButton', className, {
    loading,
    isDisabled,
    size,
    scale,
    effect,
    hasRipple
  });

  const spinnerNode = (
    <UnstyledSpinner
      spin
      disabled={isDisabled}
      value={75}
      variant="text"
      float={loading === true}
      size={size}
      scale="inner"
      thickness={4}
      margin="none"
      border={false}
      // color={getColorVariant(variant, color)}
      componentsProps={{
        bar: componentsProps.bar,
        trail: componentsProps.trail,
        outerBorder: componentsProps.outerBorder,
        innerBorder: componentsProps.innerBorder
      }}
      {...componentsProps.spinner}
    />
  );

  return (
    <button
      disabled={isDisabled || !!loading}
      type="button"
      variant={variant}
      size="none"
      scale="normal"
      color={color}
      className={mergedClassName}
      {...restProps}
    >
      {loading && loading !== 'right' && spinnerNode}
      {leftDecorator}
      {children}
      {rightDecorator}
      {loading === 'right' && spinnerNode}
      {hasRipple && (
        <UnstyledRipple
          stateful={false}
          valid={false}
          invalid={false}
          variant={variant}
          color={color}
          effect={ripple}
          {...componentsProps?.ripple}
        />
      )}
    </button>
  );
};
