import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Card } from '../../../core/components/Card/Card';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Card
        size="md"
        scale="normal"
      >
        NORMAL
      </Card>
      <Card
        size="md"
        scale="fit"
      >
        FIT
      </Card>
      <Card
        size="md"
        scale="full"
      >
        FULL
      </Card>
    </ExampleCard>
  </ExampleSection>
);
