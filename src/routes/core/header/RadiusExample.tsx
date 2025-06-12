import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Header } from '../../../core/components/Header/Header';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Header
        variant="solid"
        radius="none"
        color="primary"
      >
        NONE
      </Header>
      <Header
        variant="solid"
        radius="xs"
        color="primary"
      >
        XS
      </Header>
      <Header
        variant="solid"
        radius="sm"
        color="primary"
      >
        SM
      </Header>
      <Header
        variant="solid"
        radius="md"
        color="primary"
      >
        MD
      </Header>
      <Header
        variant="solid"
        radius="lg"
        color="primary"
      >
        LG
      </Header>
      <Header
        variant="solid"
        radius="xl"
        color="primary"
      >
        XL
      </Header>
      <Header
        variant="solid"
        radius="full"
        color="primary"
      >
        FULL
      </Header>
    </ExampleCard>
  </ExampleSection>
);
