import { CloseButton } from '../../../core/components/CloseButton/CloseButton';
import type { CloseButtonProps } from '../../../core/components/CloseButton/CloseButton.types';

export const Example = (props: CloseButtonProps<'button'>) => (
  <CloseButton {...props} />
);
