import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const UnmountOnExitExample = () => (
  <ExampleSection title="Unmount on exit">
    <Example unmountOnExit={false}>FALSE</Example>
    <Example unmountOnExit>TRUE</Example>
  </ExampleSection>
);
