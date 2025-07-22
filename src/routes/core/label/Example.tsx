import type { ReactNode } from 'react';
import { ExampleBox } from '../../../components/ExampleBox';
import { Label } from '../../../core/components/Label/Label';
import type { LabelProps } from '../../../core/components/Label/Label.types';

export const Example = ({
  children = 'LABEL',
  ...restProps
}: LabelProps<'label'>): ReactNode => (
  <Label
    label={children}
    {...restProps}
  >
    <ExampleBox>{children}</ExampleBox>
  </Label>
);
