import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const PlacementExample = () => (
  <ExampleSection title="Placement">
    <ExampleCard
      vertical
      stretch
    >
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopover placement="top-start">
          TOP-START
        </ExampleUnstyledPopover>
        <ExampleUnstyledPopover placement="top">TOP</ExampleUnstyledPopover>
        <ExampleUnstyledPopover placement="top-end">
          TOP-END
        </ExampleUnstyledPopover>
      </UnstyledFlex>
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopover placement="bottom-start">
          BOTTOM-START
        </ExampleUnstyledPopover>
        <ExampleUnstyledPopover placement="bottom">
          BOTTOM
        </ExampleUnstyledPopover>
        <ExampleUnstyledPopover placement="bottom-end">
          BOTTOM-END
        </ExampleUnstyledPopover>
      </UnstyledFlex>
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopover placement="left-start">
          LEFT-START
        </ExampleUnstyledPopover>
        <ExampleUnstyledPopover placement="left">LEFT</ExampleUnstyledPopover>
        <ExampleUnstyledPopover placement="left-end">
          LEFT-END
        </ExampleUnstyledPopover>
      </UnstyledFlex>
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopover placement="right-start">
          RIGHT-START
        </ExampleUnstyledPopover>
        <ExampleUnstyledPopover placement="right">RIGHT</ExampleUnstyledPopover>
        <ExampleUnstyledPopover placement="right-end">
          RIGHT-END
        </ExampleUnstyledPopover>
      </UnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
