import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderTExample = () => (
  <ExampleSection title="Border T">
    <ExampleCard>
      <Example bt="unset" />
      <Example bt="none" />
      <Example bt="set" />
    </ExampleCard>
  </ExampleSection>
);
