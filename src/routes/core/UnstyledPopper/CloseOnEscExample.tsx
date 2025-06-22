import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExamplePopper } from './ExamplePopper';

export const CloseOnEscExample = () => (
  <ExampleSection title="Close on esc">
    <ExampleCard>
      <ExamplePopper closeOnEsc={false}>FALSE</ExamplePopper>
      <ExamplePopper closeOnEsc>TRUE</ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
