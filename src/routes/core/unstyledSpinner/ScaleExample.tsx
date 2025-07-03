import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Example scale="normal">NORNAL</Example>
      <Example scale="text">TEXT</Example>
    </ExampleCard>
  </ExampleSection>
);
