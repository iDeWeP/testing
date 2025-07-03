import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusLExample = () => (
  <ExampleSection title="Radius L">
    <ExampleCard>
      <Example rl="none">NONE</Example>
      <Example rl="xs">XS</Example>
      <Example rl="sm">SM</Example>
      <Example rl="md">MD</Example>
      <Example rl="lg">LG</Example>
      <Example rl="xl">XL</Example>
      <Example rl="xxl">XXL</Example>
      <Example rl="full">FULL</Example>
    </ExampleCard>
  </ExampleSection>
);
