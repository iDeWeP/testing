import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Card } from '../../../core/components/Card/Card';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Card radius="none">NONE</Card>
      <Card radius="xs">XS</Card>
      <Card radius="sm">SM</Card>
      <Card radius="md">MD</Card>
      <Card radius="lg">LG</Card>
      <Card radius="xl">XL</Card>
      <Card radius="full">FULL</Card>
    </ExampleCard>
  </ExampleSection>
);
