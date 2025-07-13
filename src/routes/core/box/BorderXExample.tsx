import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderXExample = () => (
  <ExampleSection title="Border X">
    <ExampleCard>
      <Example bx="unset">UNSET</Example>
      <Example bx="none">NONE</Example>
      <Example bx="set">SET</Example>
    </ExampleCard>
  </ExampleSection>
);
