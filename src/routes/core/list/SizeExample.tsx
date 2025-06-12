import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { List } from '../../../core/components/List/List';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <List size="none">NONE</List>
      <List size="xs">XS</List>
      <List size="sm">SM</List>
      <List size="md">MD</List>
      <List size="lg">LG</List>
      <List size="xl">XL</List>
      <List size="xxl">XXL</List>
    </ExampleCard>
    <ExampleCard align>
      <List size="xs-xs">XS-XS</List>
      <List size="sm-sm">SM-SM</List>
      <List size="md-md">MD-MD</List>
      <List size="lg-lg">LG-LG</List>
      <List size="xl-xl">XL-XL</List>
      <List size="xxl-xxl">XXL-XXL</List>
    </ExampleCard>
  </ExampleSection>
);
