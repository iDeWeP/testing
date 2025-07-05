import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ShadowExample = () => (
  <ExampleSection title="Shadow">
    <ExampleCard>
      <Example shadow="unset">UNSET</Example>
      <Example shadow="xs">XS</Example>
      <Example shadow="sm">SM</Example>
      <Example shadow="md">MD</Example>
      <Example shadow="lg">LG</Example>
      <Example shadow="xl">XL</Example>
      <Example shadow="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
