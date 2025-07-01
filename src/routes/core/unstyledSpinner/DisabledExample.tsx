import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledSpinner } from './ExampleUnstyledSpinner';

export const DisabledExample = () => (
  <ExampleSection title="Disabled">
    <ExampleCard>
      <ExampleUnstyledSpinner disabled={false}>FALSE</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner disabled={true}>TRUE</ExampleUnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
