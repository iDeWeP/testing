import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const DisabledExample = () => (
  <ExampleSection title="Disabled">
    <ExampleCard>
      <UnstyledSpinner disabled={false}>FALSE</UnstyledSpinner>
      <UnstyledSpinner disabled={true}>TRUE</UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
