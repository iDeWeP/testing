import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const JustifyContentExample = () => (
  <ExampleSection title="JustifyContent">
    <ExampleCard
      vertical
      stretch
    >
      <UnstyledGrid justifyContent="normal">
        <UnstyledBox>NORMAL #2</UnstyledBox>
        <UnstyledBox>NORMAL #1</UnstyledBox>
        <UnstyledBox>NORMAL #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid justifyContent="stretch">
        <UnstyledBox>STRETCH #2</UnstyledBox>
        <UnstyledBox>STRETCH #1</UnstyledBox>
        <UnstyledBox>STRETCH #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid justifyContent="start">
        <UnstyledBox>START #1</UnstyledBox>
        <UnstyledBox>START #2</UnstyledBox>
        <UnstyledBox>START #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid justifyContent="end">
        <UnstyledBox>END #1</UnstyledBox>
        <UnstyledBox>END #2</UnstyledBox>
        <UnstyledBox>END #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid justifyContent="center">
        <UnstyledBox>CENTER #1</UnstyledBox>
        <UnstyledBox>CENTER #2</UnstyledBox>
        <UnstyledBox>CENTER #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid justifyContent="evenly">
        <UnstyledBox>EVENLY #1</UnstyledBox>
        <UnstyledBox>EVENLY #2</UnstyledBox>
        <UnstyledBox>EVENLY #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid justifyContent="between">
        <UnstyledBox>BETWEEN #1</UnstyledBox>
        <UnstyledBox>BETWEEN #2</UnstyledBox>
        <UnstyledBox>BETWEEN #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid justifyContent="around">
        <UnstyledBox>AROUND #1</UnstyledBox>
        <UnstyledBox>AROUND #2</UnstyledBox>
        <UnstyledBox>AROUND #3</UnstyledBox>
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
