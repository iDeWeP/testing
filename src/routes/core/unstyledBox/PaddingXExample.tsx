import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingXExample = () => (
  <ExampleSection title="Padding X">
    <ExampleCard>
      <Example px="unset">UNSET</Example>
      <Example px="none">NONE</Example>
      <Example px="xs">XS</Example>
      <Example px="sm">SM</Example>
      <Example px="md">MD</Example>
      <Example px="lg">LG</Example>
      <Example px="xl">XL</Example>
      <Example px="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
