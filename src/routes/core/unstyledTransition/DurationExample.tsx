import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleTransition } from './ExampleTransition';

export const DurationExample = () => (
  <ExampleSection title="Duration">
    <ExampleTransition duration={3000}>3000</ExampleTransition>
  </ExampleSection>
);
