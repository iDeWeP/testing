import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const CloseOnEscExample = () => (
  <ExampleSection title="Close on esc">
    <ExampleCard>
      <ExampleUnstyledPopover closeOnEsc={false}>FALSE</ExampleUnstyledPopover>
      <ExampleUnstyledPopover closeOnEsc>TRUE</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
