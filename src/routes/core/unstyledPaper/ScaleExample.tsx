import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPaper } from './ExampleUnstyledPaper';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledPaper scale="normal">NORMAL</ExampleUnstyledPaper>
      <ExampleUnstyledPaper scale="fit">FIT</ExampleUnstyledPaper>
      <ExampleUnstyledPaper scale="full">FULL</ExampleUnstyledPaper>
    </ExampleCard>
  </ExampleSection>
);
