import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Footer } from '../../../core/components/Footer/Footer';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Footer spacing="none">NONE</Footer>
      <Footer spacing="xs">XS</Footer>
      <Footer spacing="sm">SM</Footer>
      <Footer spacing="md">MD</Footer>
      <Footer spacing="lg">LG</Footer>
      <Footer spacing="xl">XL</Footer>
    </ExampleCard>
  </ExampleSection>
);
