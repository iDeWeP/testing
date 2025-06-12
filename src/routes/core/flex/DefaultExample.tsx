import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Flex } from '../../../core/components/Flex/Flex';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Flex>Flex</Flex>
    </ExampleCard>
  </ExampleSection>
);
