import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Header } from '../../../core/components/Header/Header';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Header spacing="none">NONE</Header>
      <Header spacing="xs">XS</Header>
      <Header spacing="sm">SM</Header>
      <Header spacing="md">MD</Header>
      <Header spacing="lg">LG</Header>
      <Header spacing="xl">XL</Header>
    </ExampleCard>
  </ExampleSection>
);
