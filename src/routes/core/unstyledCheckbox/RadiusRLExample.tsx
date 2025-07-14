import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRLExample = () => (
  <ExampleSection title="Radius RL">
    <ExampleCard>
      <Example rl="unset" />
      <Example rl="none" />
      <Example rl="xs" />
      <Example rl="sm" />
      <Example rl="md" />
      <Example rl="lg" />
      <Example rl="xl" />
      <Example rl="xxl" />
      <Example rl="full" />
    </ExampleCard>
  </ExampleSection>
);
