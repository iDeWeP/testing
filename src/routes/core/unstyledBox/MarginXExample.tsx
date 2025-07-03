import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginXExample = () => (
  <ExampleSection title="Margin X">
    <ExampleCard>
      <Example mx="none">NONE</Example>
      <Example mx="xs">XS</Example>
      <Example mx="sm">SM</Example>
      <Example mx="md">MD</Example>
      <Example mx="lg">LG</Example>
      <Example mx="xl">XL</Example>
      <Example mx="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
