import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Card } from '../../../core/components/Card/Card';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Card color="neutral">NEUTRAL</Card>
      <Card color="primary">PRIMARY</Card>
      <Card color="secondary">SECONDARY</Card>
      <Card color="tertiary">TERTIARY</Card>
      <Card color="success">SUCCESS</Card>
      <Card color="warning">WARNING</Card>
      <Card color="error">ERROR</Card>
    </ExampleCard>
  </ExampleSection>
);
