import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Example scale="normal">NORMAL</Example>
      <Example scale="square">SQUARE</Example>
      <Example scale="inner">INNER</Example>
      <Example scale="inner-square">INNER-SQUARE</Example>
    </ExampleCard>
  </ExampleSection>
);
