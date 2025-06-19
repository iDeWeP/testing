import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <UnstyledBox
        variant="light"
        color="surface"
      >
        SURFACE
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        color="neutral"
      >
        NEUTRAL
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        color="primary"
      >
        PRIMARY
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        color="secondary"
      >
        SECONDARY
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        color="tertiary"
      >
        TERTIARY
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        color="success"
      >
        SUCCESS
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        color="warning"
      >
        WARNING
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        color="error"
      >
        ERROR
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
