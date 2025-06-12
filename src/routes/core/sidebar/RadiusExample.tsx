import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Sidebar } from '../../../core/components/Sidebar/Sidebar';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Sidebar
        variant="solid"
        radius="none"
        color="primary"
      >
        NONE
      </Sidebar>
      <Sidebar
        variant="solid"
        radius="xs"
        color="primary"
      >
        XS
      </Sidebar>
      <Sidebar
        variant="solid"
        radius="sm"
        color="primary"
      >
        SM
      </Sidebar>
      <Sidebar
        variant="solid"
        radius="md"
        color="primary"
      >
        MD
      </Sidebar>
      <Sidebar
        variant="solid"
        radius="lg"
        color="primary"
      >
        LG
      </Sidebar>
      <Sidebar
        variant="solid"
        radius="xl"
        color="primary"
      >
        XL
      </Sidebar>
      <Sidebar
        variant="solid"
        radius="full"
        color="primary"
      >
        FULL
      </Sidebar>
    </ExampleCard>
  </ExampleSection>
);
