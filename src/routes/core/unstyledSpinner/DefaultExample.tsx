import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledSpinner } from './ExampleUnstyledSpinner';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <ExampleUnstyledSpinner />
    </ExampleCard>
  </ExampleSection>
);
