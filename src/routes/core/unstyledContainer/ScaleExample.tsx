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
  </ExampleSection>
);
