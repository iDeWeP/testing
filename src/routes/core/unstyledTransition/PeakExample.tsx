import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleTransition } from './ExampleTransition';

export const PeakExample = () => (
  <ExampleSection title="Peak">
    <ExampleTransition peak={50}>50</ExampleTransition>
  </ExampleSection>
);
