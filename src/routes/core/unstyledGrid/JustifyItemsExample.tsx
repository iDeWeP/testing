import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const JustifyItemsExample = () => (
  <ExampleSection title="Justify items">
    <ExampleCard
      vertical
      stretch
    >
      <UnstyledGrid
        variant="none"
        justifyItems="stretch"
      >
        <UnstyledBox variant="light">STRETCH #2</UnstyledBox>
        <UnstyledBox variant="light">STRETCH #1</UnstyledBox>
        <UnstyledBox variant="light">STRETCH #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        justifyItems="start"
      >
        <UnstyledBox variant="light">START #1</UnstyledBox>
        <UnstyledBox variant="light">START #2</UnstyledBox>
        <UnstyledBox variant="light">START #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        justifyItems="end"
      >
        <UnstyledBox variant="light">END #1</UnstyledBox>
        <UnstyledBox variant="light">END #2</UnstyledBox>
        <UnstyledBox variant="light">END #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        justifyItems="center"
      >
        <UnstyledBox variant="light">CENTER #1</UnstyledBox>
        <UnstyledBox variant="light">CENTER #2</UnstyledBox>
        <UnstyledBox variant="light">CENTER #3</UnstyledBox>
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
