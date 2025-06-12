import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Footer } from '../../../core/components/Footer/Footer';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Footer color="neutral">NEUTRAL</Footer>
      <Footer color="primary">PRIMARY</Footer>
      <Footer color="secondary">SECONDARY</Footer>
      <Footer color="tertiary">TERTIARY</Footer>
      <Footer color="success">SUCCESS</Footer>
      <Footer color="warning">WARNING</Footer>
      <Footer color="error">ERROR</Footer>
    </ExampleCard>
  </ExampleSection>
);
