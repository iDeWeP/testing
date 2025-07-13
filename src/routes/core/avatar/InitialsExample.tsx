import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const InitialsExample = () => (
  <ExampleSection title="Initials">
    <ExampleCard>
      <Example initials={false}>FALSE</Example>
      <Example>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
