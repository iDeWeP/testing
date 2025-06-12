import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { List } from '../../../core/components/List/List';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <List margin="none">NONE</List>
      <List margin="xs">XS</List>
      <List margin="sm">SM</List>
      <List margin="md">MD</List>
      <List margin="lg">LG</List>
      <List margin="xl">XL</List>
      <List margin="xxl">XXL</List>
    </ExampleCard>
  </ExampleSection>
);
