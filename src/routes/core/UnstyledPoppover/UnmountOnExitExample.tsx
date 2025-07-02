import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const UnmountOnExitExample = () => (
  <ExampleSection title="Unmount on exit">
    <ExampleCard>
      <ExampleUnstyledPopover unmountOnExit={false}>
        FALSE
      </ExampleUnstyledPopover>
      <ExampleUnstyledPopover unmountOnExit>TRUE</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
