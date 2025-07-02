import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledGrid scale="normal">NORMAL</ExampleUnstyledGrid>
      <ExampleUnstyledGrid scale="fit">FIT</ExampleUnstyledGrid>
      <ExampleUnstyledGrid scale="full">FULL</ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
