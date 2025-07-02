import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const JustifyExample = () => (
  <ExampleSection title="Justify">
    <ExampleCard
      vertical
      stretch
    >
      <ExampleUnstyledPopper
        clear
        justify="normal"
      >
        <UnstyledBox variant="light">NORMAL #2</UnstyledBox>
        <UnstyledBox variant="light">NORMAL #1</UnstyledBox>
        <UnstyledBox variant="light">NORMAL #3</UnstyledBox>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        clear
        justify="stretch"
      >
        <UnstyledBox variant="light">STRETCH #2</UnstyledBox>
        <UnstyledBox variant="light">STRETCH #1</UnstyledBox>
        <UnstyledBox variant="light">STRETCH #3</UnstyledBox>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        clear
        justify="start"
      >
        <UnstyledBox variant="light">START #1</UnstyledBox>
        <UnstyledBox variant="light">START #2</UnstyledBox>
        <UnstyledBox variant="light">START #3</UnstyledBox>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        clear
        justify="end"
      >
        <UnstyledBox variant="light">END #1</UnstyledBox>
        <UnstyledBox variant="light">END #2</UnstyledBox>
        <UnstyledBox variant="light">END #3</UnstyledBox>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        clear
        justify="center"
      >
        <UnstyledBox variant="light">CENTER #1</UnstyledBox>
        <UnstyledBox variant="light">CENTER #2</UnstyledBox>
        <UnstyledBox variant="light">CENTER #3</UnstyledBox>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        clear
        justify="evenly"
      >
        <UnstyledBox variant="light">EVENLY #1</UnstyledBox>
        <UnstyledBox variant="light">EVENLY #2</UnstyledBox>
        <UnstyledBox variant="light">EVENLY #3</UnstyledBox>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        clear
        justify="between"
      >
        <UnstyledBox variant="light">BETWEEN #1</UnstyledBox>
        <UnstyledBox variant="light">BETWEEN #2</UnstyledBox>
        <UnstyledBox variant="light">BETWEEN #3</UnstyledBox>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        clear
        justify="around"
      >
        <UnstyledBox variant="light">AROUND #1</UnstyledBox>
        <UnstyledBox variant="light">AROUND #2</UnstyledBox>
        <UnstyledBox variant="light">AROUND #3</UnstyledBox>
      </ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
