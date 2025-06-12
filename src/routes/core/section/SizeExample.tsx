import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Section } from '../../../core/components/Section/Section';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Section size="none">NONE</Section>
      <Section size="xs">XS</Section>
      <Section size="sm">SM</Section>
      <Section size="md">MD</Section>
      <Section size="lg">LG</Section>
      <Section size="xl">XL</Section>
      <Section size="xxl">XXL</Section>
    </ExampleCard>
    <ExampleCard align>
      <Section size="xs-xs">XS-XS</Section>
      <Section size="sm-sm">SM-SM</Section>
      <Section size="md-md">MD-MD</Section>
      <Section size="lg-lg">LG-LG</Section>
      <Section size="xl-xl">XL-XL</Section>
      <Section size="xxl-xxl">XXL-XXL</Section>
    </ExampleCard>
  </ExampleSection>
);
