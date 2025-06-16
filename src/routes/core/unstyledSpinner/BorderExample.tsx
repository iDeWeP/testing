import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <UnstyledSpinner
        variant="none"
        border={true}
      >
        TRUE
      </UnstyledSpinner>
      <UnstyledSpinner
        variant="none"
        border={false}
      >
        FALSE
      </UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
