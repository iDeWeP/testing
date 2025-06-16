import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleTransition } from './ExampleTransition';

export const UnmountOnExitExample = () => (
  <ExampleSection title="Unmount on exit">
    <ExampleTransition unmountOnExit />
  </ExampleSection>
);
