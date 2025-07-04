import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard>
      <Example margin="unset">UNSET</Example>
      <Example margin="none">NONE</Example>
      <Example margin="xs">XS</Example>
      <Example margin="sm">SM</Example>
      <Example margin="md">MD</Example>
      <Example margin="lg">LG</Example>
      <Example margin="xl">XL</Example>
      <Example margin="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
