import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingRExample = () => (
  <ExampleSection title="Padding R">
    <ExampleCard>
      <Example pr="unset">UNSET</Example>
      <Example pr="none">NONE</Example>
      <Example pr="xs">XS</Example>
      <Example pr="sm">SM</Example>
      <Example pr="md">MD</Example>
      <Example pr="lg">LG</Example>
      <Example pr="xl">XL</Example>
      <Example pr="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
