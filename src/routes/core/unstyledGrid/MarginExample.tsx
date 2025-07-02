import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledGrid margin="none">NONE</ExampleUnstyledGrid>
      <ExampleUnstyledGrid margin="xs">XS</ExampleUnstyledGrid>
      <ExampleUnstyledGrid margin="sm">SM</ExampleUnstyledGrid>
      <ExampleUnstyledGrid margin="md">MD</ExampleUnstyledGrid>
      <ExampleUnstyledGrid margin="lg">LG</ExampleUnstyledGrid>
      <ExampleUnstyledGrid margin="xl">XL</ExampleUnstyledGrid>
      <ExampleUnstyledGrid margin="xxl">XXL</ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
