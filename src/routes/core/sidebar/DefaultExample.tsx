import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Sidebar } from '../../../core/components/Sidebar/Sidebar';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Sidebar>Sidebar</Sidebar>
    </ExampleCard>
  </ExampleSection>
);
