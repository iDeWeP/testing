import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Sidebar } from '../../../core/components/Sidebar/Sidebar';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <Sidebar margin="none">NONE</Sidebar>
      <Sidebar margin="xs">XS</Sidebar>
      <Sidebar margin="sm">SM</Sidebar>
      <Sidebar margin="md">MD</Sidebar>
      <Sidebar margin="lg">LG</Sidebar>
      <Sidebar margin="xl">XL</Sidebar>
      <Sidebar margin="xxl">XXL</Sidebar>
    </ExampleCard>
  </ExampleSection>
);
