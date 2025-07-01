import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleUnstyledBox';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledBox
        light
        color="surface"
      >
        SURFACE
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        color="neutral"
      >
        NEUTRAL
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        color="primary"
      >
        PRIMARY
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        color="secondary"
      >
        SECONDARY
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        color="tertiary"
      >
        TERTIARY
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        color="success"
      >
        SUCCESS
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        color="warning"
      >
        WARNING
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        color="error"
      >
        ERROR
      </ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
