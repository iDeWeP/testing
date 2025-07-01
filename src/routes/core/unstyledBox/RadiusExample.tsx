import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleBox';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledBox
        variant="light"
        radius="none"
      >
        NONE
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        radius="xs"
      >
        XS
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        radius="sm"
      >
        SM
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        radius="md"
      >
        MD
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        radius="lg"
      >
        LG
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        radius="xl"
      >
        XL
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        radius="full"
      >
        FULL
      </ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
