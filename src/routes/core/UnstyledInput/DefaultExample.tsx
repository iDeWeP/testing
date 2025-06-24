import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleInput } from './ExampleInput';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <ExampleInput name="default" />
      <ExampleInput
        name="default-labeled"
        label="labedel"
      />
    </ExampleCard>
  </ExampleSection>
);
