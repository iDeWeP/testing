import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Flex } from '../../../core/components/Flex/Flex';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Flex
        size="md"
        scale="normal"
      >
        NORMAL
      </Flex>
      <Flex
        size="md"
        scale="fit"
      >
        FIT
      </Flex>
      <Flex
        size="md"
        scale="full"
      >
        FULL
      </Flex>
    </ExampleCard>
  </ExampleSection>
);
