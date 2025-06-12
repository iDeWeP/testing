import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { List } from '../../../core/components/List/List';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <List radius="none">NONE</List>
      <List radius="xs">XS</List>
      <List radius="sm">SM</List>
      <List radius="md">MD</List>
      <List radius="lg">LG</List>
      <List radius="xl">XL</List>
      <List radius="full">FULL</List>
    </ExampleCard>
  </ExampleSection>
);
