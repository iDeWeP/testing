import type { ElementType, ReactNode } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import { UnstyledPaper } from '../UnstyledPaper/UnstyledPaper';
import type { UnstyledGroupProps } from './UnstyledGroup.types';
import { unstyledGroupConfig } from './unstyledGroupConfig';

export const UnstyledGroup = <E extends ElementType>(
  props: UnstyledGroupProps<E>
): ReactNode => {
  const {
    gap: groupGap,
    className,
    orientation,
    ...restProps
  } = mergeProps(unstyledGroupConfig.props, props);

  const mergedClassName = mergeClassName('group', className, {
    orientation,
    groupGap
  });

  return (
    <UnstyledPaper
      orientation={orientation}
      className={mergedClassName}
      {...setAria('group', { orientation })}
      {...restProps}
    />
  );
};
