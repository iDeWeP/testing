import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBRExample = () => (
  <ExampleSection title="Border BR">
    <ExampleCard>
      <Example br="unset">UNSET</Example>
      <Example br="none">NONE</Example>
      <Example br="set">SET</Example>
    </ExampleCard>
  </ExampleSection>
);
