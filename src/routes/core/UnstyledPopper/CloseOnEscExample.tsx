import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const CloseOnEscExample = () => (
  <ExampleSection title="Close on esc">
    <ExampleCard>
      <ExampleUnstyledPopper closeOnEsc={false}>FALSE</ExampleUnstyledPopper>
      <ExampleUnstyledPopper closeOnEsc>TRUE</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
