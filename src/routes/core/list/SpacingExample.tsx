import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { List } from '../../../core/components/List/List';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <List spacing="none">NONE</List>
      <List spacing="xs">XS</List>
      <List spacing="sm">SM</List>
      <List spacing="md">MD</List>
      <List spacing="lg">LG</List>
      <List spacing="xl">XL</List>
    </ExampleCard>
  </ExampleSection>
);
