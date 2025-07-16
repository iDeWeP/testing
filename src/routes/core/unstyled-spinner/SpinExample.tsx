import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const SpinExample = () => (
  <ExampleSection title="Spin">
    <ExampleCard>
      <Example spin={false}>FALSE</Example>
      <Example spin>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
