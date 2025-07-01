import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const UnmountOnExitExample = () => (
  <ExampleSection title="Unmount on exit">
    <ExampleCard>
      <ExampleUnstyledPopper unmountOnExit={false}>FALSE</ExampleUnstyledPopper>
      <ExampleUnstyledPopper unmountOnExit>TRUE</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
