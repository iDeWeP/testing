import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Sidebar } from '../../../core/components/Sidebar/Sidebar';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Sidebar
        variant="solid"
        color="neutral"
      >
        NEUTRAL
      </Sidebar>
      <Sidebar
        variant="solid"
        color="primary"
      >
        PRIMARY
      </Sidebar>
      <Sidebar
        variant="solid"
        color="secondary"
      >
        SECONDARY
      </Sidebar>
      <Sidebar
        variant="solid"
        color="tertiary"
      >
        TERTIARY
      </Sidebar>
      <Sidebar
        variant="solid"
        color="success"
      >
        SUCCESS
      </Sidebar>
      <Sidebar
        variant="solid"
        color="warning"
      >
        WARNING
      </Sidebar>
      <Sidebar
        variant="solid"
        color="error"
      >
        ERROR
      </Sidebar>
    </ExampleCard>
  </ExampleSection>
);
