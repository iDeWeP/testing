import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <ExampleUnstyledPopper />
      <ExampleUnstyledPopper backdrop>BACKDROP</ExampleUnstyledPopper>
      <ExampleUnstyledPopper arrow>ARROW</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
