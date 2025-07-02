import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledFlex color="surface">SURFACE</ExampleUnstyledFlex>
      <ExampleUnstyledFlex color="neutral">NEUTRAL</ExampleUnstyledFlex>
      <ExampleUnstyledFlex color="primary">PRIMARY</ExampleUnstyledFlex>
      <ExampleUnstyledFlex color="secondary">SECONDARY</ExampleUnstyledFlex>
      <ExampleUnstyledFlex color="tertiary">TERTIARY</ExampleUnstyledFlex>
      <ExampleUnstyledFlex color="success">SUCCESS</ExampleUnstyledFlex>
      <ExampleUnstyledFlex color="warning">WARNING</ExampleUnstyledFlex>
      <ExampleUnstyledFlex color="error">ERROR</ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
