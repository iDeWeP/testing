import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Card } from '../../../core/components/Card/Card';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Card
        variant="solid"
        radius="none"
        color="primary"
      >
        NONE
      </Card>
      <Card
        variant="solid"
        radius="xs"
        color="primary"
      >
        XS
      </Card>
      <Card
        variant="solid"
        radius="sm"
        color="primary"
      >
        SM
      </Card>
      <Card
        variant="solid"
        radius="md"
        color="primary"
      >
        MD
      </Card>
      <Card
        variant="solid"
        radius="lg"
        color="primary"
      >
        LG
      </Card>
      <Card
        variant="solid"
        radius="xl"
        color="primary"
      >
        XL
      </Card>
      <Card
        variant="solid"
        radius="full"
        color="primary"
      >
        FULL
      </Card>
    </ExampleCard>
  </ExampleSection>
);
