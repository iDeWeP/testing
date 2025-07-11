import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const FollowCursorExample = () => (
  <ExampleSection title="Follow cursor">
    <ExampleCard>
      <Example followCursor={{ x: 10, y: 10 }}>10</Example>
    </ExampleCard>
  </ExampleSection>
);
