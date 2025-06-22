import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExamplePopper } from './ExamplePopper';

export const DurationExample = () => (
  <ExampleSection title="Duration">
    <ExampleCard>
      <ExamplePopper duration={3000}>3000</ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
