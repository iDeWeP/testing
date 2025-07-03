import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Example border={false}>FALSE</Example>
      <Example border>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
