import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Stack } from '../../../core/components/Stack/Stack';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Stack
        variant="solid"
        radius="none"
        color="primary"
      >
        NONE
      </Stack>
      <Stack
        variant="solid"
        radius="xs"
        color="primary"
      >
        XS
      </Stack>
      <Stack
        variant="solid"
        radius="sm"
        color="primary"
      >
        SM
      </Stack>
      <Stack
        variant="solid"
        radius="md"
        color="primary"
      >
        MD
      </Stack>
      <Stack
        variant="solid"
        radius="lg"
        color="primary"
      >
        LG
      </Stack>
      <Stack
        variant="solid"
        radius="xl"
        color="primary"
      >
        XL
      </Stack>
      <Stack
        variant="solid"
        radius="full"
        color="primary"
      >
        FULL
      </Stack>
    </ExampleCard>
  </ExampleSection>
);
