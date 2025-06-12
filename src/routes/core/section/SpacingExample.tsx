import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Section } from '../../../core/components/Section/Section';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Section spacing="none">NONE</Section>
      <Section spacing="xs">XS</Section>
      <Section spacing="sm">SM</Section>
      <Section spacing="md">MD</Section>
      <Section spacing="lg">LG</Section>
      <Section spacing="xl">XL</Section>
    </ExampleCard>
  </ExampleSection>
);
