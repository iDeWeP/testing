import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExamplePopper } from './ExamplePopper';

export const LockScrollExample = () => (
  <ExampleSection title="Lock scroll">
    <ExampleCard>
      <ExamplePopper lockScroll={false}>FALSE</ExamplePopper>
      <ExamplePopper lockScroll>TRUE</ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
