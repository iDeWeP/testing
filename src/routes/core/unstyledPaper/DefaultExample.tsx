import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPaper } from './ExampleUnstyledPaper';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <ExampleUnstyledPaper clear />
    </ExampleCard>
  </ExampleSection>
);
