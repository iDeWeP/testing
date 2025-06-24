import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleInput } from './ExampleInput';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <ExampleInput
        name="variant-default"
        variant="default"
      />
      <ExampleInput
        name="variant-light"
        variant="light"
      />
      <ExampleInput
        name="variant-outlined"
        variant="outlined"
      />
      <ExampleInput
        name="variant-default-plain"
        variant="default-plain"
      />
      <ExampleInput
        name="variant-light-plain"
        variant="light-plain"
      />
      <ExampleInput
        name="variant-outlined-plain"
        variant="outlined-plain"
      />
    </ExampleCard>
  </ExampleSection>
);
