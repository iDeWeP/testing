import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { List } from '../../../core/components/List/List';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <List
        variant="text"
        color="primary"
      >
        TEXT
      </List>
      <List
        variant="light"
        color="primary"
      >
        LIGHT
      </List>
      <List
        variant="surface"
        color="primary"
      >
        SURFACE
      </List>
      <List
        variant="solid"
        color="primary"
      >
        SOLID
      </List>
      <List
        variant="text"
        border
        color="primary"
      >
        TEXT-BORDER
      </List>
      <List
        variant="light"
        border
        color="primary"
      >
        LIGHT-BORDER
      </List>
      <List
        variant="surface"
        border
        color="primary"
      >
        SURFACE-BORDER
      </List>
      <List
        variant="solid"
        border
        color="primary"
      >
        SOLID-BORDER
      </List>
    </ExampleCard>
  </ExampleSection>
);
