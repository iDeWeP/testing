import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingLExample = () => (
  <ExampleSection title="Padding L">
    <ExampleCard>
      <Example pl="none">NONE</Example>
      <Example pl="xs">XS</Example>
      <Example pl="sm">SM</Example>
      <Example pl="md">MD</Example>
      <Example pl="lg">LG</Example>
      <Example pl="xl">XL</Example>
      <Example pl="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
