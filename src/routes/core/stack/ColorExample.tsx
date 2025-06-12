import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Stack } from '../../../core/components/Stack/Stack';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Stack
        variant="solid"
        color="neutral"
      >
        NEUTRAL
      </Stack>
      <Stack
        variant="solid"
        color="primary"
      >
        PRIMARY
      </Stack>
      <Stack
        variant="solid"
        color="secondary"
      >
        SECONDARY
      </Stack>
      <Stack
        variant="solid"
        color="tertiary"
      >
        TERTIARY
      </Stack>
      <Stack
        variant="solid"
        color="success"
      >
        SUCCESS
      </Stack>
      <Stack
        variant="solid"
        color="warning"
      >
        WARNING
      </Stack>
      <Stack
        variant="solid"
        color="error"
      >
        ERROR
      </Stack>
    </ExampleCard>
  </ExampleSection>
);
