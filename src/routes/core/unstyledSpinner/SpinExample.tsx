import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledSpinner } from './ExampleUnstyledSpinner';

export const SpinExample = () => (
  <ExampleSection title="Spin">
    <ExampleCard>
      <ExampleUnstyledSpinner spin={false}>FALSE</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner spin>TRUE</ExampleUnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
