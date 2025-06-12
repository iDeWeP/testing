import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Header } from '../../../core/components/Header/Header';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Header
        variant="solid"
        color="neutral"
      >
        NEUTRAL
      </Header>
      <Header
        variant="solid"
        color="primary"
      >
        PRIMARY
      </Header>
      <Header
        variant="solid"
        color="secondary"
      >
        SECONDARY
      </Header>
      <Header
        variant="solid"
        color="tertiary"
      >
        TERTIARY
      </Header>
      <Header
        variant="solid"
        color="success"
      >
        SUCCESS
      </Header>
      <Header
        variant="solid"
        color="warning"
      >
        WARNING
      </Header>
      <Header
        variant="solid"
        color="error"
      >
        ERROR
      </Header>
    </ExampleCard>
  </ExampleSection>
);
