import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MaxExample = () => (
  <ExampleSection title="Max">
    <ExampleCard>
      <Example max={10}>100</Example>
    </ExampleCard>
  </ExampleSection>
);
