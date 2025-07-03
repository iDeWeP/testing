import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginYExample = () => (
  <ExampleSection title="Margin Y">
    <ExampleCard>
      <Example my="none">NONE</Example>
      <Example my="xs">XS</Example>
      <Example my="sm">SM</Example>
      <Example my="md">MD</Example>
      <Example my="lg">LG</Example>
      <Example my="xl">XL</Example>
      <Example my="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
