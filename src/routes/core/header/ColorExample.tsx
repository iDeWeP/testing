import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Header } from '../../../core/components/Header/Header';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Header color="neutral">NEUTRAL</Header>
      <Header color="primary">PRIMARY</Header>
      <Header color="secondary">SECONDARY</Header>
      <Header color="tertiary">TERTIARY</Header>
      <Header color="success">SUCCESS</Header>
      <Header color="warning">WARNING</Header>
      <Header color="error">ERROR</Header>
    </ExampleCard>
  </ExampleSection>
);
