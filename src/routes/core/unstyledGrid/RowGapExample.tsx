import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const RowGapExample = () => (
  <ExampleSection title="Row gap">
    <ExampleCard>
      <UnstyledGrid
        variant="none"
        rowGap="none"
      >
        <UnstyledBox variant="light">NONE #1</UnstyledBox>
        <UnstyledBox variant="light">NONE #2</UnstyledBox>
        <UnstyledBox variant="light">NONE #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        rowGap="xs"
      >
        <UnstyledBox variant="light">XS #1</UnstyledBox>
        <UnstyledBox variant="light">XS #2</UnstyledBox>
        <UnstyledBox variant="light">XS #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        rowGap="sm"
      >
        <UnstyledBox variant="light">SM #1</UnstyledBox>
        <UnstyledBox variant="light">SM #2</UnstyledBox>
        <UnstyledBox variant="light">SM #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        rowGap="md"
      >
        <UnstyledBox variant="light">MD #1</UnstyledBox>
        <UnstyledBox variant="light">MD #2</UnstyledBox>
        <UnstyledBox variant="light">MD #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        rowGap="lg"
      >
        <UnstyledBox variant="light">LG #1</UnstyledBox>
        <UnstyledBox variant="light">LG #2</UnstyledBox>
        <UnstyledBox variant="light">LG #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        rowGap="xl"
      >
        <UnstyledBox variant="light">XL #1</UnstyledBox>
        <UnstyledBox variant="light">XL #2</UnstyledBox>
        <UnstyledBox variant="light">XL #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        rowGap="xxl"
      >
        <UnstyledBox variant="light">XXL #1</UnstyledBox>
        <UnstyledBox variant="light">XXL #2</UnstyledBox>
        <UnstyledBox variant="light">XXL #3</UnstyledBox>
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
