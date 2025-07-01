import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const FollowCursorExample = () => (
  <ExampleSection title="Follow cursor">
    <ExampleCard>
      <ExampleUnstyledPopper followCursor={false}>FALSE</ExampleUnstyledPopper>
      <ExampleUnstyledPopper followCursor>TRUE</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
