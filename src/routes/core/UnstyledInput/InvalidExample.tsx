import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleInput } from './ExampleInput';

export const InvalidExample = () => (
  <ExampleSection title="Invalid">
    <ExampleCard>
      <ExampleInput
        invalid={false}
        name="invalid-false"
      />
      <ExampleInput
        invalid
        name="invalid-true"
      />
    </ExampleCard>
  </ExampleSection>
);
