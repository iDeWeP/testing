import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const OffsetExample = () => (
  <ExampleSection title="Offset">
    <ExampleCard>
      <ExampleUnstyledPopper offset={16}>16</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
