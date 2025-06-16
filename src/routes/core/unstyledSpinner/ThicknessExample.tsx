import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const ThicknessExample = () => (
  <ExampleSection title="Thickness">
    <ExampleCard>
      <UnstyledSpinner thickness={5}>5</UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
