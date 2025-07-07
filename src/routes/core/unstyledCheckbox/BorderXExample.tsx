import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderXExample = () => (
  <ExampleSection title="Border X">
    <ExampleCard>
      <Example bx="unset" />
      <Example bx="none" />
      <Example bx="set" />
    </ExampleCard>
  </ExampleSection>
);
