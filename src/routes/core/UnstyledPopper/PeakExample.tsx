import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExamplePopper } from './ExamplePopper';

export const PeakExample = () => (
  <ExampleSection title="Peak">
    <ExampleCard>
      <ExamplePopper peak={50}>50</ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
