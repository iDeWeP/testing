import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const ColGapExample = () => (
  <ExampleSection title="Col gap">
    <ExampleCard vertical>
      <ExampleUnstyledGrid
        flow="col"
        colGap="none"
      >
        <UnstyledBox variant="light">NONE #1</UnstyledBox>
        <UnstyledBox variant="light">NONE #2</UnstyledBox>
        <UnstyledBox variant="light">NONE #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        flow="col"
        colGap="xs"
      >
        <UnstyledBox variant="light">XS #1</UnstyledBox>
        <UnstyledBox variant="light">XS #2</UnstyledBox>
        <UnstyledBox variant="light">XS #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        flow="col"
        colGap="sm"
      >
        <UnstyledBox variant="light">SM #1</UnstyledBox>
        <UnstyledBox variant="light">SM #2</UnstyledBox>
        <UnstyledBox variant="light">SM #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        flow="col"
        colGap="md"
      >
        <UnstyledBox variant="light">MD #1</UnstyledBox>
        <UnstyledBox variant="light">MD #2</UnstyledBox>
        <UnstyledBox variant="light">MD #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        flow="col"
        colGap="lg"
      >
        <UnstyledBox variant="light">LG #1</UnstyledBox>
        <UnstyledBox variant="light">LG #2</UnstyledBox>
        <UnstyledBox variant="light">LG #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        flow="col"
        colGap="xl"
      >
        <UnstyledBox variant="light">XL #1</UnstyledBox>
        <UnstyledBox variant="light">XL #2</UnstyledBox>
        <UnstyledBox variant="light">XL #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        flow="col"
        colGap="xxl"
      >
        <UnstyledBox variant="light">XXL #1</UnstyledBox>
        <UnstyledBox variant="light">XXL #2</UnstyledBox>
        <UnstyledBox variant="light">XXL #3</UnstyledBox>
      </ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
