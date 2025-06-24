import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleInput } from './ExampleInput';

export const ValidExample = () => (
  <ExampleSection title="Valid">
    <ExampleCard>
      <ExampleInput
        valid={false}
        name="valid-false"
      />
      <ExampleInput
        valid
        name="valid-true"
      />
    </ExampleCard>
  </ExampleSection>
);
