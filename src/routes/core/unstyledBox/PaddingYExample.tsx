import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingYExample = () => (
  <ExampleSection title="Padding Y">
    <ExampleCard>
      <Example py="none">NONE</Example>
      <Example py="xs">XS</Example>
      <Example py="sm">SM</Example>
      <Example py="md">MD</Example>
      <Example py="lg">LG</Example>
      <Example py="xl">XL</Example>
      <Example py="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
