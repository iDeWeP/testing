import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RippleExample = () => (
  <ExampleSection title="Ripple">
    <ExampleCard>
      <Example ripple="none"/>
      <Example ripple="default"/>
    </ExampleCard>
  </ExampleSection>
);
