import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledPopover scale="normal">NORMAL</ExampleUnstyledPopover>
      <ExampleUnstyledPopover scale="fit">FIT</ExampleUnstyledPopover>
      <ExampleUnstyledPopover scale="full">FULL</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
