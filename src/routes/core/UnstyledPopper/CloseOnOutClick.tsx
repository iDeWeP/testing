import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const CloseOnOutClickExample = () => (
  <ExampleSection title="Close on out click">
    <ExampleCard>
      <Example closeOnOutClick={false}>FALSE</Example>
      <Example closeOnOutClick>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
