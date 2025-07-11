import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const LockScrollExample = () => (
  <ExampleSection title="Lock scroll">
    <ExampleCard>
      <Example lockScroll={false}>FALSE</Example>
      <Example lockScroll>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
