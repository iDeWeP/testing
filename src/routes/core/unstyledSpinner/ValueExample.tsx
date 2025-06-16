import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const ValueExample = () => (
  <ExampleSection title="Value">
    <ExampleCard>
      <UnstyledSpinner value={50}>50</UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
