import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const CloseOnOutClickExample = () => (
  <ExampleSection title="Close on out click">
    <ExampleCard>
      <ExampleUnstyledPopover closeOnOutClick={false}>
        FALSE
      </ExampleUnstyledPopover>
      <ExampleUnstyledPopover closeOnOutClick>TRUE</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
