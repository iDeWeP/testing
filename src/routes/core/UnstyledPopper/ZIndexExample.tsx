import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExamplePopper } from './ExamplePopper';

export const ZIndexExample = () => (
  <ExampleSection title="Z-index">
    <ExampleCard>
      <ExamplePopper zIndex={6000}>6000</ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
