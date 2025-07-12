import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginTExample = () => (
  <ExampleSection title="Margin T">
    <ExampleCard>
      <Example mt="unset">UNSET</Example>
      <Example mt="none">NONE</Example>
      <Example mt="xs">XS</Example>
      <Example mt="sm">SM</Example>
      <Example mt="md">MD</Example>
      <Example mt="lg">LG</Example>
      <Example mt="xl">XL</Example>
      <Example mt="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
