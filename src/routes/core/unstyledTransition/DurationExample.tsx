import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const DurationExample = () => (
  <ExampleSection title="Duration">
    <ExampleUnstyledTransition duration={3000}>3000</ExampleUnstyledTransition>
  </ExampleSection>
);
