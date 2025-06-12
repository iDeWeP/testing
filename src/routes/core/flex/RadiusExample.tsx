import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Flex } from '../../../core/components/Flex/Flex';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Flex
        variant="solid"
        radius="none"
        color="primary"
      >
        NONE
      </Flex>
      <Flex
        variant="solid"
        radius="xs"
        color="primary"
      >
        XS
      </Flex>
      <Flex
        variant="solid"
        radius="sm"
        color="primary"
      >
        SM
      </Flex>
      <Flex
        variant="solid"
        radius="md"
        color="primary"
      >
        MD
      </Flex>
      <Flex
        variant="solid"
        radius="lg"
        color="primary"
      >
        LG
      </Flex>
      <Flex
        variant="solid"
        radius="xl"
        color="primary"
      >
        XL
      </Flex>
      <Flex
        variant="solid"
        radius="full"
        color="primary"
      >
        FULL
      </Flex>
    </ExampleCard>
  </ExampleSection>
);
