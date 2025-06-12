import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { List } from '../../../core/components/List/List';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <List>List</List>
    </ExampleCard>
  </ExampleSection>
);
