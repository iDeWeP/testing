import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Example border="unset">UNSET</Example>
      <Example border="none">NONE</Example>
      <Example border="auto">AUTO</Example>
      <Example border="set">SET</Example>
    </ExampleCard>
  </ExampleSection>
);
