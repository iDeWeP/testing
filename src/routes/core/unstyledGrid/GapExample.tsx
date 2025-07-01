import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const GapExample = () => (
  <ExampleSection title="Gap">
    <ExampleCard vertical>
      <UnstyledGrid gap="none">
        <UnstyledBox>NONE #1</UnstyledBox>
        <UnstyledBox>NONE #2</UnstyledBox>
        <UnstyledBox>NONE #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid gap="xs">
        <UnstyledBox>XS #1</UnstyledBox>
        <UnstyledBox>XS #2</UnstyledBox>
        <UnstyledBox>XS #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid gap="sm">
        <UnstyledBox>SM #1</UnstyledBox>
        <UnstyledBox>SM #2</UnstyledBox>
        <UnstyledBox>SM #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid gap="md">
        <UnstyledBox>MD #1</UnstyledBox>
        <UnstyledBox>MD #2</UnstyledBox>
        <UnstyledBox>MD #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid gap="lg">
        <UnstyledBox>LG #1</UnstyledBox>
        <UnstyledBox>LG #2</UnstyledBox>
        <UnstyledBox>LG #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid gap="xl">
        <UnstyledBox>XL #1</UnstyledBox>
        <UnstyledBox>XL #2</UnstyledBox>
        <UnstyledBox>XL #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid gap="xxl">
        <UnstyledBox>XXL #1</UnstyledBox>
        <UnstyledBox>XXL #2</UnstyledBox>
        <UnstyledBox>XXL #3</UnstyledBox>
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
