import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderRExample = () => (
  <ExampleSection title="Border R">
    <ExampleCard>
      <Example br="unset" />
      <Example br="none" />
      <Example br="set" />
    </ExampleCard>
  </ExampleSection>
);
