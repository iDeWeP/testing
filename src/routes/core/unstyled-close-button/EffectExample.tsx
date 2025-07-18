import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const EffectExample = () => (
  <ExampleSection title="Effect">
    <ExampleCard>
      <Example effect="unset" />
      <Example effect="shadow" />
    </ExampleCard>
  </ExampleSection>
);
