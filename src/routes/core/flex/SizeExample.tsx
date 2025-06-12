import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Flex } from '../../../core/components/Flex/Flex';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Flex size="none">NONE</Flex>
      <Flex size="xs">XS</Flex>
      <Flex size="sm">SM</Flex>
      <Flex size="md">MD</Flex>
      <Flex size="lg">LG</Flex>
      <Flex size="xl">XL</Flex>
    </ExampleCard>
    <ExampleCard align>
      <Flex size="xs-xs">XS-XS</Flex>
      <Flex size="sm-sm">SM-SM</Flex>
      <Flex size="md-md">MD-MD</Flex>
      <Flex size="lg-lg">LG-LG</Flex>
      <Flex size="xl-xl">XL-XL</Flex>
    </ExampleCard>
  </ExampleSection>
);
