import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPaper } from './ExampleUnstyledPaper';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <ExampleUnstyledPaper size="none">NONE</ExampleUnstyledPaper>
      <ExampleUnstyledPaper size="xs">XS</ExampleUnstyledPaper>
      <ExampleUnstyledPaper size="sm">SM</ExampleUnstyledPaper>
      <ExampleUnstyledPaper size="md">MD</ExampleUnstyledPaper>
      <ExampleUnstyledPaper size="lg">LG</ExampleUnstyledPaper>
      <ExampleUnstyledPaper size="xl">XL</ExampleUnstyledPaper>
      <ExampleUnstyledPaper size="xxl">XXL</ExampleUnstyledPaper>
    </ExampleCard>
    <ExampleCard>
      <ExampleUnstyledPaper size="none">NONE</ExampleUnstyledPaper>
      <ExampleUnstyledPaper size="xs-xs">XS-XS</ExampleUnstyledPaper>
      <ExampleUnstyledPaper size="sm-sm">SM-SM</ExampleUnstyledPaper>
      <ExampleUnstyledPaper size="md-md">MD-MD</ExampleUnstyledPaper>
      <ExampleUnstyledPaper size="lg-lg">LG-LG</ExampleUnstyledPaper>
      <ExampleUnstyledPaper size="xl-xl">XL-XL</ExampleUnstyledPaper>
      <ExampleUnstyledPaper size="xxl-xxl">XXL-XXL</ExampleUnstyledPaper>
    </ExampleCard>
  </ExampleSection>
);
