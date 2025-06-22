import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExamplePopper } from './ExamplePopper';

export const OffsetExample = () => (
  <ExampleSection title="Offset">
    <ExampleCard>
      <ExamplePopper offset={16}>16</ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
