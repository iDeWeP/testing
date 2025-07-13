import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ShowZeroExample = () => (
  <ExampleSection title="ShowZero">
    <ExampleCard>
      <Example showZero={false}>0</Example>
      <Example showZero>0</Example>
    </ExampleCard>
  </ExampleSection>
);
