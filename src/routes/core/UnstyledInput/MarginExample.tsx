import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleInput } from './ExampleInput';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleInput
        name="margin-none"
        margin="none"
      />
      <ExampleInput
        name="margin-xs"
        margin="xs"
      />
      <ExampleInput
        name="margin-sm"
        margin="sm"
      />
      <ExampleInput
        name="margin-md"
        margin="md"
      />
      <ExampleInput
        name="margin-lg"
        margin="lg"
      />
      <ExampleInput
        name="margin-xl"
        margin="xl"
      />
      <ExampleInput
        name="margin-xxl"
        margin="xxl"
      />
    </ExampleCard>
  </ExampleSection>
);
