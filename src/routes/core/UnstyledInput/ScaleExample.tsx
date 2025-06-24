import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleInput } from './ExampleInput';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleInput
        name="scale-normal"
        scale="normal"
      />
      <ExampleInput
        name="scale-fit"
        scale="fit"
      />
      <ExampleInput
        name="scale-full"
        scale="full"
      />
    </ExampleCard>
  </ExampleSection>
);
