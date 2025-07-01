import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledSpinner } from './ExampleUnstyledSpinner';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <ExampleUnstyledSpinner size="xs">XS</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner size="sm">SM</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner size="md">MD</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner size="lg">LG</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner size="xl">XL</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner size="xxl">XXL</ExampleUnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
