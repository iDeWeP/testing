import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const LockScrollExample = () => (
  <ExampleSection title="Lock scroll">
    <ExampleCard>
      <ExampleUnstyledPopover lockScroll={false}>FALSE</ExampleUnstyledPopover>
      <ExampleUnstyledPopover lockScroll>TRUE</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
