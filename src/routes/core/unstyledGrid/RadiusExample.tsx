import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledGrid radius="none">NONE</ExampleUnstyledGrid>
      <ExampleUnstyledGrid radius="xs">XS</ExampleUnstyledGrid>
      <ExampleUnstyledGrid radius="sm">SM</ExampleUnstyledGrid>
      <ExampleUnstyledGrid radius="md">MD</ExampleUnstyledGrid>
      <ExampleUnstyledGrid radius="lg">LG</ExampleUnstyledGrid>
      <ExampleUnstyledGrid radius="xl">XL</ExampleUnstyledGrid>
      <ExampleUnstyledGrid radius="xxl">XXL</ExampleUnstyledGrid>
      <ExampleUnstyledGrid radius="full">FULL</ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
