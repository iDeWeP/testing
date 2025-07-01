import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const ZIndexExample = () => (
  <ExampleSection title="Z-index">
    <ExampleCard>
      <ExampleUnstyledPopper zIndex={6000}>6000</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
