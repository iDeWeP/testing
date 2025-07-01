import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const LockScrollExample = () => (
  <ExampleSection title="Lock scroll">
    <ExampleCard>
      <ExampleUnstyledPopper lockScroll={false}>FALSE</ExampleUnstyledPopper>
      <ExampleUnstyledPopper lockScroll>TRUE</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
