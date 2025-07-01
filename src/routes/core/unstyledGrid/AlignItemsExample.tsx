import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const AlignItemsExample = () => (
  <ExampleSection title="Align items">
    <ExampleCard
      vertical
      stretch
    >
      <UnstyledGrid alignItems="stretch">
        <UnstyledBox>STRETCH #2</UnstyledBox>
        <UnstyledBox>STRETCH #1</UnstyledBox>
        <UnstyledBox>STRETCH #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid alignItems="start">
        <UnstyledBox>START #1</UnstyledBox>
        <UnstyledBox>START #2</UnstyledBox>
        <UnstyledBox>START #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid alignItems="end">
        <UnstyledBox>END #1</UnstyledBox>
        <UnstyledBox>END #2</UnstyledBox>
        <UnstyledBox>END #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid alignItems="center">
        <UnstyledBox>CENTER #1</UnstyledBox>
        <UnstyledBox>CENTER #2</UnstyledBox>
        <UnstyledBox>CENTER #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid alignItems="baseline">
        <UnstyledBox>BASELINE #1</UnstyledBox>
        <UnstyledBox>BASELINE #2</UnstyledBox>
        <UnstyledBox>BASELINE #3</UnstyledBox>
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
