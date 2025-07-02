import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const PeakExample = () => (
  <ExampleSection title="Peak">
    <ExampleCard>
      <ExampleUnstyledPopover peak={50}>50</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
