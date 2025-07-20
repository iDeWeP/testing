import { UnstyledLoader } from '../../../core/components/UnstyledLoader/UnstyledLoader';
import type { UnstyledLoaderProps } from '../../../core/components/UnstyledLoader/UnstyledLoader.types';

type Props = {
  clear?: boolean;
} & UnstyledLoaderProps;

export const Example = ({ clear, ...restProps }: Props) => (
  <UnstyledLoader
    value={clear ? 0 : 75}
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  />
);
