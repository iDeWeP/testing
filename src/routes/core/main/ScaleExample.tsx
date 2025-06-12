import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Main } from '../../../core/components/Main/Main';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Main
        size="md"
        scale="normal"
      >
        NORMAL
      </Main>
      <Main
        size="md"
        scale="fit"
      >
        FIT
      </Main>
      <Main
        size="md"
        scale="full"
      >
        FULL
      </Main>
    </ExampleCard>
  </ExampleSection>
);
