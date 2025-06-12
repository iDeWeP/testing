import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Flex } from '../../../core/components/Flex/Flex';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Flex
        scale="square"
        spacing="md"
      >
        SQUARE
      </Flex>
      <Flex
        scale="square-fit"
        spacing="md"
      >
        SQUARE-FIT
      </Flex>
      <Flex
        scale="square-full"
        spacing="md"
      >
        SQUARE-FULL
      </Flex>
      <Flex
        scale="rect"
        spacing="md"
      >
        RECT
      </Flex>
      <Flex
        scale="rect-fit"
        spacing="md"
      >
        RECT-FIT
      </Flex>
      <Flex
        scale="rect-full"
        spacing="md"
      >
        RECT-FULL
      </Flex>
    </ExampleCard>
  </ExampleSection>
);
