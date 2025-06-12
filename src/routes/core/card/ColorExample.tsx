import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Card } from '../../../core/components/Card/Card';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Card
        variant="solid"
        color="neutral"
      >
        NEUTRAL
      </Card>
      <Card
        variant="solid"
        color="primary"
      >
        PRIMARY
      </Card>
      <Card
        variant="solid"
        color="secondary"
      >
        SECONDARY
      </Card>
      <Card
        variant="solid"
        color="tertiary"
      >
        TERTIARY
      </Card>
      <Card
        variant="solid"
        color="success"
      >
        SUCCESS
      </Card>
      <Card
        variant="solid"
        color="warning"
      >
        WARNING
      </Card>
      <Card
        variant="solid"
        color="error"
      >
        ERROR
      </Card>
    </ExampleCard>
  </ExampleSection>
);
