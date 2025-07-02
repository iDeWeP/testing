import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const DurationExample = () => (
  <ExampleSection title="Duration">
    <ExampleCard>
      <ExampleUnstyledPopover duration={3000}>3000</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
