import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledSpinner } from './ExampleUnstyledSpinner';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledSpinner color="surface">SURFACE</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner color="neutral">NEUTRAL</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner color="primary">PRIMARY</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner color="secondary">
        SECONDARY
      </ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner color="tertiary">TERTIARY</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner color="success">SUCCESS</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner color="warning">WARNING</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner color="error">ERROR</ExampleUnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
