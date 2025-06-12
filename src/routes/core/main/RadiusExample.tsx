import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Main } from '../../../core/components/Main/Main';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Main
        variant="solid"
        radius="none"
        color="primary"
      >
        NONE
      </Main>
      <Main
        variant="solid"
        radius="xs"
        color="primary"
      >
        XS
      </Main>
      <Main
        variant="solid"
        radius="sm"
        color="primary"
      >
        SM
      </Main>
      <Main
        variant="solid"
        radius="md"
        color="primary"
      >
        MD
      </Main>
      <Main
        variant="solid"
        radius="lg"
        color="primary"
      >
        LG
      </Main>
      <Main
        variant="solid"
        radius="xl"
        color="primary"
      >
        XL
      </Main>
      <Main
        variant="solid"
        radius="full"
        color="primary"
      >
        FULL
      </Main>
    </ExampleCard>
  </ExampleSection>
);
