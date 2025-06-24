import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleInput } from './ExampleInput';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleInput
        name="color-surface"
        variant="light"
        color="surface"
      />
      <ExampleInput
        name="color-neutral"
        variant="light"
        color="neutral"
      />
      <ExampleInput
        name="color-"
        variant="light"
        color="primary"
      />
      <ExampleInput
        name="color-"
        variant="light"
        color="secondary"
      />
      <ExampleInput
        name="color-"
        variant="light"
        color="tertiary"
      />
      <ExampleInput
        name="color-"
        variant="light"
        color="success"
      />
      <ExampleInput
        name="color-"
        variant="light"
        color="warning"
      />
      <ExampleInput
        name="color-"
        variant="light"
        color="error"
      />
    </ExampleCard>
  </ExampleSection>
);
