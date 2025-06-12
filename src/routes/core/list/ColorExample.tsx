import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { List } from '../../../core/components/List/List';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <List
        variant="solid"
        color="neutral"
      >
        NEUTRAL
      </List>
      <List
        variant="solid"
        color="primary"
      >
        PRIMARY
      </List>
      <List
        variant="solid"
        color="secondary"
      >
        SECONDARY
      </List>
      <List
        variant="solid"
        color="tertiary"
      >
        TERTIARY
      </List>
      <List
        variant="solid"
        color="success"
      >
        SUCCESS
      </List>
      <List
        variant="solid"
        color="warning"
      >
        WARNING
      </List>
      <List
        variant="solid"
        color="error"
      >
        ERROR
      </List>
    </ExampleCard>
  </ExampleSection>
);
