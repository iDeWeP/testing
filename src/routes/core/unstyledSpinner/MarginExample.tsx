import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <UnstyledSpinner margin="none">NONE</UnstyledSpinner>
      <UnstyledSpinner margin="xs">XS</UnstyledSpinner>
      <UnstyledSpinner margin="sm">SM</UnstyledSpinner>
      <UnstyledSpinner margin="md">MD</UnstyledSpinner>
      <UnstyledSpinner margin="lg">LG</UnstyledSpinner>
      <UnstyledSpinner margin="xl">XL</UnstyledSpinner>
      <UnstyledSpinner margin="xxl">XXL</UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
