import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingBExample = () => (
  <ExampleSection title="Padding B">
    <ExampleCard>
      <Example pb="none">NONE</Example>
      <Example pb="xs">XS</Example>
      <Example pb="sm">SM</Example>
      <Example pb="md">MD</Example>
      <Example pb="lg">LG</Example>
      <Example pb="xl">XL</Example>
      <Example pb="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
