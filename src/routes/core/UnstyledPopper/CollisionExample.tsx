import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const CollisionExample = () => (
  <ExampleSection title="Collision">
    <ExampleCard>
      <Example collision="none">NONE</Example>
      <Example collision="shift">SHIFT</Example>
      <Example collision="flip">FLIP</Example>
    </ExampleCard>
  </ExampleSection>
);
