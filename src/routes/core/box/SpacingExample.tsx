import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <UnstyledBox spacing="none">NONE</UnstyledBox>
      <UnstyledBox spacing="xs">XS</UnstyledBox>
      <UnstyledBox spacing="sm">SM</UnstyledBox>
      <UnstyledBox spacing="md">MD</UnstyledBox>
      <UnstyledBox spacing="lg">LG</UnstyledBox>
      <UnstyledBox spacing="xl">XL</UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
