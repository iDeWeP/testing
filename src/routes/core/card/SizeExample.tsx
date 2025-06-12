import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Card } from '../../../core/components/Card/Card';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Card size="none">NONE</Card>
      <Card size="xs">XS</Card>
      <Card size="sm">SM</Card>
      <Card size="md">MD</Card>
      <Card size="lg">LG</Card>
      <Card size="xl">XL</Card>
      <Card size="xxl">XXL</Card>
    </ExampleCard>
    <ExampleCard align>
      <Card size="xs-xs">XS-XS</Card>
      <Card size="sm-sm">SM-SM</Card>
      <Card size="md-md">MD-MD</Card>
      <Card size="lg-lg">LG-LG</Card>
      <Card size="xl-xl">XL-XL</Card>
      <Card size="xxl-xxl">XXL-XXL</Card>
    </ExampleCard>
  </ExampleSection>
);
