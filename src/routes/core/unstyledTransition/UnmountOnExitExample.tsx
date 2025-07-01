import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const UnmountOnExitExample = () => (
  <ExampleSection title="Unmount on exit">
    <ExampleUnstyledTransition unmountOnExit={false}>
      FALSE
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition unmountOnExit>TRUE</ExampleUnstyledTransition>
  </ExampleSection>
);
