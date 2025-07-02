import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const WeightExample = () => (
  <ExampleSection title="Weight">
    <ExampleCard>
      <Example weight="normal">NORMAL</Example>
      <Example weight="semi">SEMI</Example>
      <Example weight="bold">BOLD</Example>
    </ExampleCard>
  </ExampleSection>
);
