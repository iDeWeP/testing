import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledGrid color="surface">SURFACE</ExampleUnstyledGrid>
      <ExampleUnstyledGrid color="neutral">NEUTRAL</ExampleUnstyledGrid>
      <ExampleUnstyledGrid color="primary">PRIMARY</ExampleUnstyledGrid>
      <ExampleUnstyledGrid color="secondary">SECONDARY</ExampleUnstyledGrid>
      <ExampleUnstyledGrid color="tertiary">TERTIARY</ExampleUnstyledGrid>
      <ExampleUnstyledGrid color="success">SUCCESS</ExampleUnstyledGrid>
      <ExampleUnstyledGrid color="warning">WARNING</ExampleUnstyledGrid>
      <ExampleUnstyledGrid color="error">ERROR</ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
