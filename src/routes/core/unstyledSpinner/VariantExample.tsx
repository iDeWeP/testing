import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <Example variant="none">NONE</Example>
      <Example variant="text">TEXT</Example>
      <Example variant="plain">PLAIN</Example>
      <Example variant="light">LIGHT</Example>
      <Example variant="surface">SURFACE</Example>
      <Example variant="solid">SOLID</Example>
      <Example
        variant="none"
        border
      >
        NONE-BORDER
      </Example>
      <Example
        variant="text"
        border
      >
        TEXT-BORDER
      </Example>
      <Example
        variant="plain"
        border
      >
        PLAIN-BORDER
      </Example>
      <Example
        variant="light"
        border
      >
        LIGHT-BORDER
      </Example>
      <Example
        variant="surface"
        border
      >
        SURFACE-BORDER
      </Example>
      <Example
        variant="solid"
        border
      >
        SOLID-BORDER
      </Example>
    </ExampleCard>
  </ExampleSection>
);
