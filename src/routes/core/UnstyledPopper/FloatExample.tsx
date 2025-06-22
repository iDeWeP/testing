import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExamplePopper } from './ExamplePopper';

export const FloatExample = () => (
  <ExampleSection title="Float">
    <ExampleCard>
      <ExamplePopper float="none">NONE</ExamplePopper>
      <ExamplePopper float="auto">AUTO</ExamplePopper>
      <ExamplePopper float="flip">FLIP</ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
