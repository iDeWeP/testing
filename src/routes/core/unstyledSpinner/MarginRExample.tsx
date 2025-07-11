import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginRExample = () => (
  <ExampleSection title="Margin R">
    <ExampleCard>
      <Example mr="unset">UNSET</Example>
      <Example mr="none">NONE</Example>
      <Example mr="xs">XS</Example>
      <Example mr="sm">SM</Example>
      <Example mr="md">MD</Example>
      <Example mr="lg">LG</Example>
      <Example mr="xl">XL</Example>
      <Example mr="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
