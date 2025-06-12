import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Footer } from '../../../core/components/Footer/Footer';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <Footer margin="none">NONE</Footer>
      <Footer margin="xs">XS</Footer>
      <Footer margin="sm">SM</Footer>
      <Footer margin="md">MD</Footer>
      <Footer margin="lg">LG</Footer>
      <Footer margin="xl">XL</Footer>
      <Footer margin="xxl">XXL</Footer>
    </ExampleCard>
  </ExampleSection>
);
