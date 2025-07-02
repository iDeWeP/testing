import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const TriggerExample = () => (
  <ExampleSection title="Trigger">
    <ExampleCard
      vertical
      stretch
    >
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopover trigger="none">NONE</ExampleUnstyledPopover>
        <ExampleUnstyledPopover trigger="none-click">
          NONE-CLICK
        </ExampleUnstyledPopover>
        <ExampleUnstyledPopover trigger="none-hover">
          NONE-HOVER
        </ExampleUnstyledPopover>
      </UnstyledFlex>
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopover trigger="click">CLICK</ExampleUnstyledPopover>
        <ExampleUnstyledPopover trigger="click-hover">
          CLICK-HOVER
        </ExampleUnstyledPopover>
        <ExampleUnstyledPopover trigger="click-none">
          CLICK-NONE
        </ExampleUnstyledPopover>
      </UnstyledFlex>
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopover trigger="hover">HOVER</ExampleUnstyledPopover>
        <ExampleUnstyledPopover trigger="hover-click">
          HOVER-CLICK
        </ExampleUnstyledPopover>
        <ExampleUnstyledPopover trigger="hover-none">
          HOVER-NONE
        </ExampleUnstyledPopover>
      </UnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
