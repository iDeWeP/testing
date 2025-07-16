import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCard } from '../UnstyledCard/UnstyledCard';
import type { UnstyledCardBodyProps } from './UnstyledCardBody.types';
import { unstyledCardBodyConfig } from './unstyledCardBodyConfig';

export const UnstyledCardBody = <E extends ElementType>(
  props: UnstyledCardBodyProps<E>
) => {
  const mergedProps = useMergeProps(
    'cardBody',
    unstyledCardBodyConfig.props,
    props
  );

  return <UnstyledCard {...mergedProps} />;
};
