import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBXExample = () => (
  <ExampleSection title="Border BX">
    <ExampleCard>
      <Example bx="unset">UNSET</Example>
      <Example bx="none">NONE</Example>
      <Example bx="set">SET</Example>
    </ExampleCard>
  </ExampleSection>
);
