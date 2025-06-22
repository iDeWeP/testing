import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExamplePopper } from './ExamplePopper';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <ExamplePopper />
      <ExamplePopper backdrop>BACKDROP</ExamplePopper>
      <ExamplePopper arrow>ARROW</ExamplePopper>
      <ExamplePopper arrow defaultOpen>ARROW</ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
