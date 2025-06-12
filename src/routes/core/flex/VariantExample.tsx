import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Flex } from '../../../core/components/Flex/Flex';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <Flex
        variant="text"
        color="primary"
      >
        TEXT
      </Flex>
      <Flex
        variant="light"
        color="primary"
      >
        LIGHT
      </Flex>
      <Flex
        variant="surface"
        color="primary"
      >
        SURFACE
      </Flex>
      <Flex
        variant="solid"
        color="primary"
      >
        SOLID
      </Flex>
      <Flex
        variant="text"
        border
        color="primary"
      >
        TEXT-BORDER
      </Flex>
      <Flex
        variant="light"
        border
        color="primary"
      >
        LIGHT-BORDER
      </Flex>
      <Flex
        variant="surface"
        border
        color="primary"
      >
        SURFACE-BORDER
      </Flex>
      <Flex
        variant="solid"
        border
        color="primary"
      >
        SOLID-BORDER
      </Flex>
    </ExampleCard>
  </ExampleSection>
);
