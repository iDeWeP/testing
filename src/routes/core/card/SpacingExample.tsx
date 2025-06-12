import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Card } from '../../../core/components/Card/Card';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Card spacing="none">NONE</Card>
      <Card spacing="xs">XS</Card>
      <Card spacing="sm">SM</Card>
      <Card spacing="md">MD</Card>
      <Card spacing="lg">LG</Card>
      <Card spacing="xl">XL</Card>
    </ExampleCard>
  </ExampleSection>
);
