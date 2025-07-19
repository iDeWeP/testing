import { cloneElement } from 'react';
import type { MergeComponentProps, SVGNodeProps } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { setAria } from '../../utils/set-aria/set-aria';

type Props = MergeComponentProps<'svg', { children?: SVGNodeProps }>;

export const UnstyledSwitchIcon = ({
  className,
  children,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('switchIcon', className);

  if (children) {
    return cloneElement(children, {
      className: mergedClassName,
      ...setAria('icon'),
      ...restProps
    });
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={mergedClassName}
      {...setAria('icon')}
      {...restProps}
    >
      <circle
        cx="12"
        cy="12"
        r="12"
      />
    </svg>
  );
};
