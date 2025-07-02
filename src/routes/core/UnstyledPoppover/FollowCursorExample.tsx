import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const FollowCursorExample = () => (
  <ExampleSection title="Follow cursor">
    <ExampleCard>
      <ExampleUnstyledPopover followCursor={{ x: 10, y: 10 }}>
        10
      </ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
