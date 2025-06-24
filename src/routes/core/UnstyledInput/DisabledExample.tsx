import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleInput } from './ExampleInput';

export const DisabledExample = () => (
  <ExampleSection title="Disabled">
    <ExampleCard>
      <ExampleInput
        disabled={false}
        name="disabled-false"
      />
      <ExampleInput
        disabled
        name="disabled-true"
      />
    </ExampleCard>
  </ExampleSection>
);
