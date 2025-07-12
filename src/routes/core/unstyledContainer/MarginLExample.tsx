import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginLExample = () => (
  <ExampleSection title="Margin L">
    <ExampleCard>
      <Example ml="unset">UNSET</Example>
      <Example ml="none">NONE</Example>
      <Example ml="xs">XS</Example>
      <Example ml="sm">SM</Example>
      <Example ml="md">MD</Example>
      <Example ml="lg">LG</Example>
      <Example ml="xl">XL</Example>
      <Example ml="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
