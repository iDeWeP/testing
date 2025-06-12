import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Sidebar } from '../../../core/components/Sidebar/Sidebar';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Sidebar spacing="none">NONE</Sidebar>
      <Sidebar spacing="xs">XS</Sidebar>
      <Sidebar spacing="sm">SM</Sidebar>
      <Sidebar spacing="md">MD</Sidebar>
      <Sidebar spacing="lg">LG</Sidebar>
      <Sidebar spacing="xl">XL</Sidebar>
    </ExampleCard>
  </ExampleSection>
);
