import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Example scale="normal">NORMAL</Example>
      <Example scale="square">SQUARE</Example>
    </ExampleCard>
  </ExampleSection>
);
