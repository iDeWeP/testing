import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Footer } from '../../../core/components/Footer/Footer';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Footer radius="none">NONE</Footer>
      <Footer radius="xs">XS</Footer>
      <Footer radius="sm">SM</Footer>
      <Footer radius="md">MD</Footer>
      <Footer radius="lg">LG</Footer>
      <Footer radius="xl">XL</Footer>
      <Footer radius="full">FULL</Footer>
    </ExampleCard>
  </ExampleSection>
);
