import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPaper } from './ExampleUnstyledPaper';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledPaper radius="none">NONE</ExampleUnstyledPaper>
      <ExampleUnstyledPaper radius="xs">XS</ExampleUnstyledPaper>
      <ExampleUnstyledPaper radius="sm">SM</ExampleUnstyledPaper>
      <ExampleUnstyledPaper radius="md">MD</ExampleUnstyledPaper>
      <ExampleUnstyledPaper radius="lg">LG</ExampleUnstyledPaper>
      <ExampleUnstyledPaper radius="xl">XL</ExampleUnstyledPaper>
      <ExampleUnstyledPaper radius="xxl">XXL</ExampleUnstyledPaper>
      <ExampleUnstyledPaper radius="full">FULL</ExampleUnstyledPaper>
    </ExampleCard>
  </ExampleSection>
);
