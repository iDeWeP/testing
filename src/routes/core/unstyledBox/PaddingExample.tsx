import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingExample = () => (
  <ExampleSection title="Padding">
    <ExampleCard>
      <Example padding="none">NONE</Example>
      <Example padding="xs">XS</Example>
      <Example padding="sm">SM</Example>
      <Example padding="md">MD</Example>
      <Example padding="lg">LG</Example>
      <Example padding="xl">XL</Example>
      <Example padding="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
