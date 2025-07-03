import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <Example
      clear
      color="surface"
    >
      SURFACE
    </Example>
    <Example
      clear
      color="neutral"
    >
      NEUTRAL
    </Example>
    <Example
      clear
      color="primary"
    >
      PRIMARY
    </Example>
    <Example
      clear
      color="secondary"
    >
      SECONDARY
    </Example>
    <Example
      clear
      color="tertiary"
    >
      TERTIARY
    </Example>
    <Example
      clear
      color="success"
    >
      SUCCESS
    </Example>
    <Example
      clear
      color="warning"
    >
      WARNING
    </Example>
    <Example
      clear
      color="error"
    >
      ERROR
    </Example>
  </ExampleSection>
);
