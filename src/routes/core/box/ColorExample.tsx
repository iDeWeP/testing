import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <UnstyledBox
        variant="solid"
        color="neutral"
      >
        NEUTRAL
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        color="primary"
      >
        PRIMARY
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        color="secondary"
      >
        SECONDARY
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        color="tertiary"
      >
        TERTIARY
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        color="success"
      >
        SUCCESS
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        color="warning"
      >
        WARNING
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        color="error"
      >
        ERROR
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
