import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Main } from '../../../core/components/Main/Main';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Main>Main</Main>
    </ExampleCard>
  </ExampleSection>
);
