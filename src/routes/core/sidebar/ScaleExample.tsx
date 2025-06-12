import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Sidebar } from '../../../core/components/Sidebar/Sidebar';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Sidebar
        size="md"
        scale="normal"
      >
        NORMAL
      </Sidebar>
      <Sidebar
        size="md"
        scale="fit"
      >
        FIT
      </Sidebar>
      <Sidebar
        size="md"
        scale="full"
      >
        FULL
      </Sidebar>
    </ExampleCard>
  </ExampleSection>
);
