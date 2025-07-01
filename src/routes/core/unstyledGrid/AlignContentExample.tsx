import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const AlignContentExample = () => (
  <ExampleSection title="Align content">
    <ExampleCard
      vertical
      stretch
    >
      <UnstyledGrid alignContent="normal">
        <UnstyledBox>NORMAL #2</UnstyledBox>
        <UnstyledBox>NORMAL #1</UnstyledBox>
        <UnstyledBox>NORMAL #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid alignContent="stretch">
        <UnstyledBox>STRETCH #2</UnstyledBox>
        <UnstyledBox>STRETCH #1</UnstyledBox>
        <UnstyledBox>STRETCH #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid alignContent="start">
        <UnstyledBox>START #1</UnstyledBox>
        <UnstyledBox>START #2</UnstyledBox>
        <UnstyledBox>START #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid alignContent="end">
        <UnstyledBox>END #1</UnstyledBox>
        <UnstyledBox>END #2</UnstyledBox>
        <UnstyledBox>END #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid alignContent="center">
        <UnstyledBox>CENTER #1</UnstyledBox>
        <UnstyledBox>CENTER #2</UnstyledBox>
        <UnstyledBox>CENTER #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid alignContent="evenly">
        <UnstyledBox>EVENLY #1</UnstyledBox>
        <UnstyledBox>EVENLY #2</UnstyledBox>
        <UnstyledBox>EVENLY #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid alignContent="between">
        <UnstyledBox>BETWEEN #1</UnstyledBox>
        <UnstyledBox>BETWEEN #2</UnstyledBox>
        <UnstyledBox>BETWEEN #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid alignContent="around">
        <UnstyledBox>AROUND #1</UnstyledBox>
        <UnstyledBox>AROUND #2</UnstyledBox>
        <UnstyledBox>AROUND #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid alignContent="baseline">
        <UnstyledBox>BASELINE #1</UnstyledBox>
        <UnstyledBox>BASELINE #2</UnstyledBox>
        <UnstyledBox>BASELINE #3</UnstyledBox>
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
