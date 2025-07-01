import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleBox';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledBox
        variant="light"
        color="surface"
      >
        SURFACE
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        color="neutral"
      >
        NEUTRAL
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        color="primary"
      >
        PRIMARY
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        color="secondary"
      >
        SECONDARY
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        color="tertiary"
      >
        TERTIARY
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        color="success"
      >
        SUCCESS
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        color="warning"
      >
        WARNING
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        color="error"
      >
        ERROR
      </ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
