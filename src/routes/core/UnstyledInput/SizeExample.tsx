import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleInput } from './ExampleInput';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <ExampleInput
        name="size-sm"
        size="sm"
      />
      <ExampleInput
        name="size-md"
        size="md"
      />
      <ExampleInput
        name="size-lg"
        size="lg"
      />
    </ExampleCard>
  </ExampleSection>
);
