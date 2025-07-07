import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderYExample = () => (
  <ExampleSection title="Border Y">
    <ExampleCard>
      <Example by="unset">UNSET</Example>
      <Example by="none">NONE</Example>
      <Example by="set">SET</Example>
    </ExampleCard>
  </ExampleSection>
);
