import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPaper } from './ExampleUnstyledPaper';

export const ShadowExample = () => (
  <ExampleSection title="Shadow">
    <ExampleCard>
      <ExampleUnstyledPaper shadow="none">NONE</ExampleUnstyledPaper>
      <ExampleUnstyledPaper shadow="xs">XS</ExampleUnstyledPaper>
      <ExampleUnstyledPaper shadow="sm">SM</ExampleUnstyledPaper>
      <ExampleUnstyledPaper shadow="md">MD</ExampleUnstyledPaper>
      <ExampleUnstyledPaper shadow="lg">LG</ExampleUnstyledPaper>
      <ExampleUnstyledPaper shadow="xl">XL</ExampleUnstyledPaper>
      <ExampleUnstyledPaper shadow="xxl">XXL</ExampleUnstyledPaper>
    </ExampleCard>
  </ExampleSection>
);
