import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Example scale="none">NONE</Example>
      <Example scale="normal">NORMAL</Example>
      <Example scale="square">SQUARE</Example>
      <Example scale="circle">CIRCLE</Example>
    </ExampleCard>
    <ExampleCard>
      <Example
        size="md-md"
        scale="none"
      >
        NONE
      </Example>
      <Example
        size="md-md"
        scale="normal"
      >
        NORMAL
      </Example>
      <Example
        size="md-md"
        scale="square"
      >
        SQUARE
      </Example>
      <Example
        size="md-md"
        scale="circle"
      >
        CIRCLE
      </Example>
    </ExampleCard>
  </ExampleSection>
);
