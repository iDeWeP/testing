import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <UnstyledSpinner
        variant="light"
        color="neutral"
      >
        NEUTRAL
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="light"
        color="primary"
      >
        PRIMARY
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="light"
        color="secondary"
      >
        SECONDARY
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="light"
        color="tertiary"
      >
        TERTIARY
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="light"
        color="success"
      >
        SUCCESS
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="light"
        color="warning"
      >
        WARNING
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="light"
        color="error"
      >
        ERROR
      </UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
