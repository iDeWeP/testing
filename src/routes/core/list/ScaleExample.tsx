import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { List } from '../../../core/components/List/List';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <List
        scale="square"
        spacing="md"
      >
        SQUARE
      </List>
      <List
        scale="square-fit"
        spacing="md"
      >
        SQUARE-FIT
      </List>
      <List
        scale="square-full"
        spacing="md"
      >
        SQUARE-FULL
      </List>
      <List
        scale="rect"
        spacing="md"
      >
        RECT
      </List>
      <List
        scale="rect-fit"
        spacing="md"
      >
        RECT-FIT
      </List>
      <List
        scale="rect-full"
        spacing="md"
      >
        RECT-FULL
      </List>
    </ExampleCard>
  </ExampleSection>
);
