import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const FloatExample = () => (
  <ExampleSection title="Float">
    <ExampleCard>
      <UnstyledSpinner float={false}>FALSE</UnstyledSpinner>
      <UnstyledSpinner float={true}>TRUE</UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
