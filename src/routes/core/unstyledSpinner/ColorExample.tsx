import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <UnstyledSpinner
        variant="text"
        color="neutral"
      >
        NEUTRAL
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="text"
        color="primary"
      >
        PRIMARY
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="text"
        color="secondary"
      >
        SECONDARY
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="text"
        color="tertiary"
      >
        TERTIARY
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="text"
        color="success"
      >
        SUCCESS
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="text"
        color="warning"
      >
        WARNING
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="text"
        color="error"
      >
        ERROR
      </UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
