import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledSpinner } from './ExampleUnstyledSpinner';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <ExampleUnstyledSpinner variant="none">NONE</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner variant="text">TEXT</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner variant="plain">PLAIN</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner variant="light">LIGHT</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner variant="surface">SURFACE</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner variant="solid">SOLID</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner
        variant="none"
        border
      >
        NONE-BORDER
      </ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner
        variant="text"
        border
      >
        TEXT-BORDER
      </ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner
        variant="plain"
        border
      >
        PLAIN-BORDER
      </ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner
        variant="light"
        border
      >
        LIGHT-BORDER
      </ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner
        variant="surface"
        border
      >
        SURFACE-BORDER
      </ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner
        variant="solid"
        border
      >
        SOLID-BORDER
      </ExampleUnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
