import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Navigation } from '../../../core/components/Navigation/Navigation';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Navigation
        variant="solid"
        color="neutral"
      >
        NEUTRAL
      </Navigation>
      <Navigation
        variant="solid"
        color="primary"
      >
        PRIMARY
      </Navigation>
      <Navigation
        variant="solid"
        color="secondary"
      >
        SECONDARY
      </Navigation>
      <Navigation
        variant="solid"
        color="tertiary"
      >
        TERTIARY
      </Navigation>
      <Navigation
        variant="solid"
        color="success"
      >
        SUCCESS
      </Navigation>
      <Navigation
        variant="solid"
        color="warning"
      >
        WARNING
      </Navigation>
      <Navigation
        variant="solid"
        color="error"
      >
        ERROR
      </Navigation>
    </ExampleCard>
  </ExampleSection>
);
