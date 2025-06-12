import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { List } from '../../../core/components/List/List';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <List
        size="md"
        scale="normal"
      >
        NORMAL
      </List>
      <List
        size="md"
        scale="fit"
      >
        FIT
      </List>
      <List
        size="md"
        scale="full"
      >
        FULL
      </List>
    </ExampleCard>
  </ExampleSection>
);
