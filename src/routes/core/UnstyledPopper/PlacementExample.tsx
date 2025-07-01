import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const PlacementExample = () => (
  <ExampleSection title="Placement">
    <ExampleCard
      vertical
      stretch
    >
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopper placement="top-start">
          TOP-START
        </ExampleUnstyledPopper>
        <ExampleUnstyledPopper placement="top">TOP</ExampleUnstyledPopper>
        <ExampleUnstyledPopper placement="top-end">
          TOP-END
        </ExampleUnstyledPopper>
      </UnstyledFlex>
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopper placement="bottom-start">
          BOTTOM-START
        </ExampleUnstyledPopper>
        <ExampleUnstyledPopper placement="bottom">BOTTOM</ExampleUnstyledPopper>
        <ExampleUnstyledPopper placement="bottom-end">
          BOTTOM-END
        </ExampleUnstyledPopper>
      </UnstyledFlex>
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopper placement="left-start">
          LEFT-START
        </ExampleUnstyledPopper>
        <ExampleUnstyledPopper placement="left">LEFT</ExampleUnstyledPopper>
        <ExampleUnstyledPopper placement="left-end">
          LEFT-END
        </ExampleUnstyledPopper>
      </UnstyledFlex>
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopper placement="right-start">
          RIGHT-START
        </ExampleUnstyledPopper>
        <ExampleUnstyledPopper placement="right">RIGHT</ExampleUnstyledPopper>
        <ExampleUnstyledPopper placement="right-end">
          RIGHT-END
        </ExampleUnstyledPopper>
      </UnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
