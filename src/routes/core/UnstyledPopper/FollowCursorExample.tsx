import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const FollowCursorExample = () => (
  <ExampleSection title="Follow cursor">
    <ExampleCard>
      <ExampleUnstyledPopper followCursor={{ x: 10, y: 10 }}>
        10
      </ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
