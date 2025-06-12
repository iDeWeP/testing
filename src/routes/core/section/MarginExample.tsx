import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Section } from '../../../core/components/Section/Section';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <Section margin="none">NONE</Section>
      <Section margin="xs">XS</Section>
      <Section margin="sm">SM</Section>
      <Section margin="md">MD</Section>
      <Section margin="lg">LG</Section>
      <Section margin="xl">XL</Section>
      <Section margin="xxl">XXL</Section>
    </ExampleCard>
  </ExampleSection>
);
