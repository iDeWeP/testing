import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <UnstyledFlex
        variant="light"
        color="surface"
      >
        SURFACE
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        color="neutral"
      >
        NEUTRAL
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        color="primary"
      >
        PRIMARY
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        color="secondary"
      >
        SECONDARY
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        color="tertiary"
      >
        TERTIARY
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        color="success"
      >
        SUCCESS
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        color="warning"
      >
        WARNING
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        color="error"
      >
        ERROR
      </UnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
