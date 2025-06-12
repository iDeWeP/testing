import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Flex } from '../../../core/components/Flex/Flex';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Flex
        variant="solid"
        color="neutral"
      >
        NEUTRAL
      </Flex>
      <Flex
        variant="solid"
        color="primary"
      >
        PRIMARY
      </Flex>
      <Flex
        variant="solid"
        color="secondary"
      >
        SECONDARY
      </Flex>
      <Flex
        variant="solid"
        color="tertiary"
      >
        TERTIARY
      </Flex>
      <Flex
        variant="solid"
        color="success"
      >
        SUCCESS
      </Flex>
      <Flex
        variant="solid"
        color="warning"
      >
        WARNING
      </Flex>
      <Flex
        variant="solid"
        color="error"
      >
        ERROR
      </Flex>
    </ExampleCard>
  </ExampleSection>
);
