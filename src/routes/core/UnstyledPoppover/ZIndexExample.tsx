import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const ZIndexExample = () => (
  <ExampleSection title="Z-index">
    <ExampleCard>
      <ExampleUnstyledPopover zIndex={6000}>6000</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
