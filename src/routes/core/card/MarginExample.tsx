import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Card } from '../../../core/components/Card/Card';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <Card margin="none">NONE</Card>
      <Card margin="xs">XS</Card>
      <Card margin="sm">SM</Card>
      <Card margin="md">MD</Card>
      <Card margin="lg">LG</Card>
      <Card margin="xl">XL</Card>
      <Card margin="xxl">XXL</Card>
    </ExampleCard>
  </ExampleSection>
);
