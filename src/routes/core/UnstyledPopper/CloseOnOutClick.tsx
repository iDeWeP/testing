import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const CloseOnOutClickExample = () => (
  <ExampleSection title="Close on out click">
    <ExampleCard>
      <ExampleUnstyledPopper closeOnOutClick={false}>
        FALSE
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper closeOnOutClick>TRUE</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
