import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Header } from '../../../core/components/Header/Header';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Header
        size="md"
        scale="normal"
      >
        NORMAL
      </Header>
      <Header
        size="md"
        scale="fit"
      >
        FIT
      </Header>
      <Header
        size="md"
        scale="full"
      >
        FULL
      </Header>
    </ExampleCard>
  </ExampleSection>
);
