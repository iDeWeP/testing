import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlexBox } from '../../../core/components/UnstyledFlexBox/UnstyledFlexBox';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <UnstyledFlexBox>UNSTYLED-FLEX-BOX</UnstyledFlexBox>
    </ExampleCard>
  </ExampleSection>
);
