import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const PeakExample = () => (
  <ExampleSection title="Peak">
    <ExampleCard>
      <ExampleUnstyledPopper peak={50}>50</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
