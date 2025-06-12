import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Footer } from '../../../core/components/Footer/Footer';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Footer size="none">NONE</Footer>
      <Footer size="xs">XS</Footer>
      <Footer size="sm">SM</Footer>
      <Footer size="md">MD</Footer>
      <Footer size="lg">LG</Footer>
      <Footer size="xl">XL</Footer>
    </ExampleCard>
    <ExampleCard align>
      <Footer size="xs-xs">XS-XS</Footer>
      <Footer size="sm-sm">SM-SM</Footer>
      <Footer size="md-md">MD-MD</Footer>
      <Footer size="lg-lg">LG-LG</Footer>
      <Footer size="xl-xl">XL-XL</Footer>
    </ExampleCard>
  </ExampleSection>
);
