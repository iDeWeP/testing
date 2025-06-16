import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard align>
      <UnstyledSpinner size="xs">XS</UnstyledSpinner>
      <UnstyledSpinner size="sm">SM</UnstyledSpinner>
      <UnstyledSpinner size="md">MD</UnstyledSpinner>
      <UnstyledSpinner size="lg">LG</UnstyledSpinner>
      <UnstyledSpinner size="xl">XL</UnstyledSpinner>
      <UnstyledSpinner size="xxl">XXL</UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
