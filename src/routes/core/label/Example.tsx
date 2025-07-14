import { ExampleBox } from '../../../components/ExampleBox';
import { Label } from '../../../core/components/Label/Label';
import type { LabelProps } from '../../../core/components/Label/Label.types';

export const Example = ({
  children = 'LABEL',
  ...restProps
}: LabelProps<'label'>) => (
  <Label
    label={children}
    {...restProps}
  >
    <ExampleBox>{children}</ExampleBox>
  </Label>
);
