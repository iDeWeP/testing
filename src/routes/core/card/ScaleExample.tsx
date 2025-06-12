import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Card } from '../../../core/components/Card/Card';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Card
        scale="square"
        spacing="md"
      >
        SQUARE
      </Card>
      <Card
        scale="square-fit"
        spacing="md"
      >
        SQUARE-FIT
      </Card>
      <Card
        scale="square-full"
        spacing="md"
      >
        SQUARE-FULL
      </Card>
      <Card
        scale="rect"
        spacing="md"
      >
        RECT
      </Card>
      <Card
        scale="rect-fit"
        spacing="md"
      >
        RECT-FIT
      </Card>
      <Card
        scale="rect-full"
        spacing="md"
      >
        RECT-FULL
      </Card>
    </ExampleCard>
  </ExampleSection>
);
