import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleInput } from './ExampleInput';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleInput
        name="radius-none"
        radius="none"
      />
      <ExampleInput
        name="radius-xs"
        radius="xs"
      />
      <ExampleInput
        name="radius-sm"
        radius="sm"
      />
      <ExampleInput
        name="radius-md"
        radius="md"
      />
      <ExampleInput
        name="radius-lg"
        radius="lg"
      />
      <ExampleInput
        name="radius-xxl"
        radius="full"
      />
    </ExampleCard>
  </ExampleSection>
);
