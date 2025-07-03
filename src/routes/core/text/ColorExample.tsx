import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Example color="none">NONE</Example>
      <Example color="surface">SURFACE</Example>
      <Example color="neutral">NEUTRAL</Example>
      <Example color="primary">PRIMARY</Example>
      <Example color="secondary">SECONDARY</Example>
      <Example color="tertiary">TERTIARY</Example>
      <Example color="success">SUCCESS</Example>
      <Example color="warning">WARNING</Example>
      <Example color="error">ERROR</Example>
    </ExampleCard>
  </ExampleSection>
);
