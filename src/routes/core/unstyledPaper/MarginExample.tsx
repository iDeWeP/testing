import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPaper } from './ExampleUnstyledPaper';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledPaper margin="none">NONE</ExampleUnstyledPaper>
      <ExampleUnstyledPaper margin="xs">XS</ExampleUnstyledPaper>
      <ExampleUnstyledPaper margin="sm">SM</ExampleUnstyledPaper>
      <ExampleUnstyledPaper margin="md">MD</ExampleUnstyledPaper>
      <ExampleUnstyledPaper margin="lg">LG</ExampleUnstyledPaper>
      <ExampleUnstyledPaper margin="xl">XL</ExampleUnstyledPaper>
      <ExampleUnstyledPaper margin="xxl">XXL</ExampleUnstyledPaper>
    </ExampleCard>
  </ExampleSection>
);
