import { ExampleBox } from '../../../components/ExampleBox';
import { Group } from '../../../core/components/Group/Group';
import type { GroupProps } from '../../../core/components/Group/Group.types';

export const Example = ({
  children = 'GROUP',
  ...restProps
}: GroupProps<'div'>) => (
  <Group {...restProps}>
    <ExampleBox>{children} #1</ExampleBox>
    <ExampleBox>{children} #2</ExampleBox>
    <ExampleBox>{children} #3</ExampleBox>
  </Group>
);
