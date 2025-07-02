import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const FollowCursorExample = () => (
  <ExampleSection title="Follow cursor">
    <ExampleCard>
      <ExampleUnstyledPopover followCursor={false}>
        FALSE
      </ExampleUnstyledPopover>
      <ExampleUnstyledPopover followCursor>TRUE</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
