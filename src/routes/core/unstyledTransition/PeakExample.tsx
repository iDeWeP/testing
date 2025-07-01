import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const PeakExample = () => (
  <ExampleSection title="Peak">
    <ExampleUnstyledTransition peak={50}>50</ExampleUnstyledTransition>
  </ExampleSection>
);
