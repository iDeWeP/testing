import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Main } from '../../../core/components/Main/Main';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Main
        variant="solid"
        color="neutral"
      >
        NEUTRAL
      </Main>
      <Main
        variant="solid"
        color="primary"
      >
        PRIMARY
      </Main>
      <Main
        variant="solid"
        color="secondary"
      >
        SECONDARY
      </Main>
      <Main
        variant="solid"
        color="tertiary"
      >
        TERTIARY
      </Main>
      <Main
        variant="solid"
        color="success"
      >
        SUCCESS
      </Main>
      <Main
        variant="solid"
        color="warning"
      >
        WARNING
      </Main>
      <Main
        variant="solid"
        color="error"
      >
        ERROR
      </Main>
    </ExampleCard>
  </ExampleSection>
);
