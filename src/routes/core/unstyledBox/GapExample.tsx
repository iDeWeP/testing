import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const GapExample = () => (
  <ExampleSection title="Gap">
    <ExampleCard>
      <Example gap="none">NONE</Example>
      <Example gap="xs">XS</Example>
      <Example gap="sm">SM</Example>
      <Example gap="md">MD</Example>
      <Example gap="lg">LG</Example>
      <Example gap="xl">XL</Example>
      <Example gap="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
