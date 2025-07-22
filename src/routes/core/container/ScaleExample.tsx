import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Example scale="default">DEFAULT</Example>
      <Example scale="square">SQUARE</Example>
      <Example scale="circle">CIRCLE</Example>
    </ExampleCard>
    <ExampleCard>
      <Example
        size="md-md"
        scale="default"
      >
        DEFAULT
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
