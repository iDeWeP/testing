import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBBExample = () => (
  <ExampleSection title="Border BB">
    <ExampleCard>
      <Example bb="unset">UNSET</Example>
      <Example bb="none">NONE</Example>
      <Example bb="set">SET</Example>
    </ExampleCard>
  </ExampleSection>
);
