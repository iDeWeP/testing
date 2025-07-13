import { Spinner } from '../../../core/components/Spinner/Spinner';
import type { SpinnerProps } from '../../../core/components/Spinner/Spinner.types';

export const Example = ({ ...restProps }: SpinnerProps) => (
  <Spinner {...restProps} />
);
