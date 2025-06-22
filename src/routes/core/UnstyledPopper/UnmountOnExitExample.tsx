import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExamplePopper } from './ExamplePopper';

export const UnmountOnExitExample = () => (
  <ExampleSection title="Unmount on exit">
    <ExampleCard>
      <ExamplePopper unmountOnExit={false}>FALSE</ExamplePopper>
      <ExamplePopper unmountOnExit>TRUE</ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
