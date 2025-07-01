import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledSpinner } from './ExampleUnstyledSpinner';

export const FloatExample = () => (
  <ExampleSection title="Float">
    <ExampleCard>
      <ExampleUnstyledSpinner float={false}>FALSE</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner float={true}>TRUE</ExampleUnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
