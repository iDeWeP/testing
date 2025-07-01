import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleUnstyledBox';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledBox
        light
        radius="none"
      >
        NONE
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        radius="xs"
      >
        XS
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        radius="sm"
      >
        SM
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        radius="md"
      >
        MD
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        radius="lg"
      >
        LG
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        radius="xl"
      >
        XL
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        radius="full"
      >
        FULL
      </ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
