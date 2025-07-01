import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const AlignItemsExample = () => (
  <ExampleSection title="Align items">
    <ExampleCard>
      <UnstyledGrid
        variant="none"
        alignItems="stretch"
      >
        <UnstyledBox variant="light">STRETCH #2</UnstyledBox>
        <UnstyledBox variant="light">STRETCH #1</UnstyledBox>
        <UnstyledBox variant="light">STRETCH #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        alignItems="start"
      >
        <UnstyledBox variant="light">START #1</UnstyledBox>
        <UnstyledBox variant="light">START #2</UnstyledBox>
        <UnstyledBox variant="light">START #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        alignItems="end"
      >
        <UnstyledBox variant="light">END #1</UnstyledBox>
        <UnstyledBox variant="light">END #2</UnstyledBox>
        <UnstyledBox variant="light">END #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        alignItems="center"
      >
        <UnstyledBox variant="light">CENTER #1</UnstyledBox>
        <UnstyledBox variant="light">CENTER #2</UnstyledBox>
        <UnstyledBox variant="light">CENTER #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        alignItems="baseline"
      >
        <UnstyledBox variant="light">BASELINE #1</UnstyledBox>
        <UnstyledBox variant="light">BASELINE #2</UnstyledBox>
        <UnstyledBox variant="light">BASELINE #3</UnstyledBox>
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
