import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Example clear />
      <Example backdrop>BACKDROP</Example>
      <Example arrow>ARROW</Example>
    </ExampleCard>
  </ExampleSection>
);
