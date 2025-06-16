import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <UnstyledSpinner>UNSTYLED-SPINNER</UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
