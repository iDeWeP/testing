import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledPopper scale="normal">NORMAL</ExampleUnstyledPopper>
      <ExampleUnstyledPopper scale="fit">FIT</ExampleUnstyledPopper>
      <ExampleUnstyledPopper scale="full">FULL</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
