import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const OffsetExample = () => (
  <ExampleSection title="Offset">
    <ExampleCard>
      <ExampleUnstyledPopover offset={16}>16</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
