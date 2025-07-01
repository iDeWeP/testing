import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledButton color="surface">SURFACE</ExampleUnstyledButton>
      <ExampleUnstyledButton color="neutral">NEUTRAL</ExampleUnstyledButton>
      <ExampleUnstyledButton color="primary">PRIMARY</ExampleUnstyledButton>
      <ExampleUnstyledButton color="secondary">SECONDARY</ExampleUnstyledButton>
      <ExampleUnstyledButton color="tertiary">TERTIARY</ExampleUnstyledButton>
      <ExampleUnstyledButton color="success">SUCCESS</ExampleUnstyledButton>
      <ExampleUnstyledButton color="warning">WARNING</ExampleUnstyledButton>
      <ExampleUnstyledButton color="error">ERROR</ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
