import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExamplePopper } from './ExamplePopper';

export const CloseOnOutClickExample = () => (
  <ExampleSection title="Close on out click">
    <ExampleCard>
      <ExamplePopper closeOnOutClick={false}>FALSE</ExamplePopper>
      <ExamplePopper closeOnOutClick>TRUE</ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
