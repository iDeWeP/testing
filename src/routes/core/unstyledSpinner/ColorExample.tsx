import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <UnstyledSpinner
        variant="solid"
        color="neutral"
      >
        NEUTRAL
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="solid"
        color="primary"
      >
        PRIMARY
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="solid"
        color="secondary"
      >
        SECONDARY
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="solid"
        color="tertiary"
      >
        TERTIARY
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="solid"
        color="success"
      >
        SUCCESS
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="solid"
        color="warning"
      >
        WARNING
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="solid"
        color="error"
      >
        ERROR
      </UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
