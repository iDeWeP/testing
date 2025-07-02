import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleUnstyledBox';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledBox color="surface">SURFACE</ExampleUnstyledBox>
      <ExampleUnstyledBox color="neutral">NEUTRAL</ExampleUnstyledBox>
      <ExampleUnstyledBox color="primary">PRIMARY</ExampleUnstyledBox>
      <ExampleUnstyledBox color="secondary">SECONDARY</ExampleUnstyledBox>
      <ExampleUnstyledBox color="tertiary">TERTIARY</ExampleUnstyledBox>
      <ExampleUnstyledBox color="success">SUCCESS</ExampleUnstyledBox>
      <ExampleUnstyledBox color="warning">WARNING</ExampleUnstyledBox>
      <ExampleUnstyledBox color="error">ERROR</ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
