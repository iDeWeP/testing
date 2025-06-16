import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const SpinExample = () => (
  <ExampleSection title="Spin">
    <ExampleCard>
      <UnstyledSpinner spin>TRUE</UnstyledSpinner>
      <UnstyledSpinner spin={false}>FALSE</UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
