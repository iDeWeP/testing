import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExamplePopper } from './ExamplePopper';

export const FollowCursorExample = () => (
  <ExampleSection title="Follow cursor">
    <ExampleCard>
      <ExamplePopper followCursor={false}>FALSE</ExamplePopper>
      <ExamplePopper followCursor>TRUE</ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
