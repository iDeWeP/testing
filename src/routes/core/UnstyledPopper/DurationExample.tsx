import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const DurationExample = () => (
  <ExampleSection title="Duration">
    <ExampleCard>
      <ExampleUnstyledPopper duration={3000}>3000</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
