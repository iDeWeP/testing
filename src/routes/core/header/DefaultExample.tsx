import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Header } from '../../../core/components/Header/Header';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Header>Header</Header>
    </ExampleCard>
  </ExampleSection>
);
