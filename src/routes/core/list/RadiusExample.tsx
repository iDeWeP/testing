import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { List } from '../../../core/components/List/List';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <List
        variant="solid"
        radius="none"
        color="primary"
      >
        NONE
      </List>
      <List
        variant="solid"
        radius="xs"
        color="primary"
      >
        XS
      </List>
      <List
        variant="solid"
        radius="sm"
        color="primary"
      >
        SM
      </List>
      <List
        variant="solid"
        radius="md"
        color="primary"
      >
        MD
      </List>
      <List
        variant="solid"
        radius="lg"
        color="primary"
      >
        LG
      </List>
      <List
        variant="solid"
        radius="xl"
        color="primary"
      >
        XL
      </List>
      <List
        variant="solid"
        radius="full"
        color="primary"
      >
        FULL
      </List>
    </ExampleCard>
  </ExampleSection>
);
