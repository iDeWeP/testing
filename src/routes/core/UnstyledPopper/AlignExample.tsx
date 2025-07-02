import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const AlignExample = () => (
  <ExampleSection title="Align">
    <ExampleCard>
      <ExampleUnstyledPopper
        clear
        align="stretch"
      >
        <UnstyledBox variant="light">STRETCH #2</UnstyledBox>
        <UnstyledBox variant="light">STRETCH #1</UnstyledBox>
        <UnstyledBox variant="light">STRETCH #3</UnstyledBox>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        clear
        align="start"
      >
        <UnstyledBox variant="light">START #1</UnstyledBox>
        <UnstyledBox variant="light">START #2</UnstyledBox>
        <UnstyledBox variant="light">START #3</UnstyledBox>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        clear
        align="end"
      >
        <UnstyledBox variant="light">END #1</UnstyledBox>
        <UnstyledBox variant="light">END #2</UnstyledBox>
        <UnstyledBox variant="light">END #3</UnstyledBox>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        clear
        align="center"
      >
        <UnstyledBox variant="light">CENTER #1</UnstyledBox>
        <UnstyledBox variant="light">CENTER #2</UnstyledBox>
        <UnstyledBox variant="light">CENTER #3</UnstyledBox>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        clear
        align="baseline"
      >
        <UnstyledBox variant="light">BASELINE #1</UnstyledBox>
        <UnstyledBox variant="light">BASELINE #2</UnstyledBox>
        <UnstyledBox variant="light">BASELINE #3</UnstyledBox>
      </ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
