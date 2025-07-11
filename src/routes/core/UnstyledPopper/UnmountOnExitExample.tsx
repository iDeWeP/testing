import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const UnmountOnExitExample = () => (
  <ExampleSection title="Unmount on exit">
    <ExampleCard>
      <Example unmountOnExit={false}>FALSE</Example>
      <Example unmountOnExit>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
