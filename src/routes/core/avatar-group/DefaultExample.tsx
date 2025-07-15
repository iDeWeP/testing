import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Example />
      <Example max={2} />
      <Example total={2} />
      <Example
        max={2}
        total={2}
      />
    </ExampleCard>
  </ExampleSection>
);
