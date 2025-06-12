import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Stack } from '../../../core/components/Stack/Stack';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Stack
        size="md"
        scale="normal"
      >
        NORMAL
      </Stack>
      <Stack
        size="md"
        scale="fit"
      >
        FIT
      </Stack>
      <Stack
        size="md"
        scale="full"
      >
        FULL
      </Stack>
    </ExampleCard>
  </ExampleSection>
);
