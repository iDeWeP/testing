import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Stack } from '../../../core/components/Stack/Stack';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Stack
        scale="square"
        spacing="md"
      >
        SQUARE
      </Stack>
      <Stack
        scale="square-fit"
        spacing="md"
      >
        SQUARE-FIT
      </Stack>
      <Stack
        scale="square-full"
        spacing="md"
      >
        SQUARE-FULL
      </Stack>
      <Stack
        scale="rect"
        spacing="md"
      >
        RECT
      </Stack>
      <Stack
        scale="rect-fit"
        spacing="md"
      >
        RECT-FIT
      </Stack>
      <Stack
        scale="rect-full"
        spacing="md"
      >
        RECT-FULL
      </Stack>
    </ExampleCard>
  </ExampleSection>
);
