import type { ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCheckbox } from '../UnstyledCheckbox/UnstyledCheckbox';
import type { RadioProps } from './Radio.types';
import { radioConfig } from './radioConfig';

export const Radio = (props: RadioProps): ReactNode => {
  const mergedProps = useMergeProps('radio', radioConfig.props, props);

  return (
    <UnstyledCheckbox
      type="radio"
      {...mergedProps}
    />
  );
};
