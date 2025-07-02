import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPaper } from './ExampleUnstyledPaper';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledPaper color="surface">SURFACE</ExampleUnstyledPaper>
      <ExampleUnstyledPaper color="neutral">NEUTRAL</ExampleUnstyledPaper>
      <ExampleUnstyledPaper color="primary">PRIMARY</ExampleUnstyledPaper>
      <ExampleUnstyledPaper color="secondary">SECONDARY</ExampleUnstyledPaper>
      <ExampleUnstyledPaper color="tertiary">TERTIARY</ExampleUnstyledPaper>
      <ExampleUnstyledPaper color="success">SUCCESS</ExampleUnstyledPaper>
      <ExampleUnstyledPaper color="warning">WARNING</ExampleUnstyledPaper>
      <ExampleUnstyledPaper color="error">ERROR</ExampleUnstyledPaper>
    </ExampleCard>
  </ExampleSection>
);
