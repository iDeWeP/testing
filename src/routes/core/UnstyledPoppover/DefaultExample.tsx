import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <ExampleUnstyledPopover clear />
      <ExampleUnstyledPopover backdrop>BACKDROP</ExampleUnstyledPopover>
      <ExampleUnstyledPopover arrow>ARROW</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
