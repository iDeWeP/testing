import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Stack } from '../../../core/components/Stack/Stack';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Stack>Stack</Stack>
    </ExampleCard>
  </ExampleSection>
);
