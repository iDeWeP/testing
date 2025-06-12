import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Header } from '../../../core/components/Header/Header';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Header radius="none">NONE</Header>
      <Header radius="xs">XS</Header>
      <Header radius="sm">SM</Header>
      <Header radius="md">MD</Header>
      <Header radius="lg">LG</Header>
      <Header radius="xl">XL</Header>
      <Header radius="full">FULL</Header>
    </ExampleCard>
  </ExampleSection>
);
