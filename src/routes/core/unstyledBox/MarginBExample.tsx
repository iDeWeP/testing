import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginBExample = () => (
  <ExampleSection title="Margin B">
    <ExampleCard>
      <Example mb="none">NONE</Example>
      <Example mb="xs">XS</Example>
      <Example mb="sm">SM</Example>
      <Example mb="md">MD</Example>
      <Example mb="lg">LG</Example>
      <Example mb="xl">XL</Example>
      <Example mb="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
