import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const TriggerExample = () => (
  <ExampleSection title="Trigger">
    <ExampleCard
      vertical
      stretch
    >
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopper trigger="none">NONE</ExampleUnstyledPopper>
        <ExampleUnstyledPopper trigger="none-click">
          NONE-CLICK
        </ExampleUnstyledPopper>
        <ExampleUnstyledPopper trigger="none-hover">
          NONE-HOVER
        </ExampleUnstyledPopper>
      </UnstyledFlex>
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopper trigger="click">CLICK</ExampleUnstyledPopper>
        <ExampleUnstyledPopper trigger="click-none">
          CLICK-NONE
        </ExampleUnstyledPopper>
        <ExampleUnstyledPopper trigger="click-hover">
          CLICK-HOVER
        </ExampleUnstyledPopper>
      </UnstyledFlex>
      <UnstyledFlex justify="evenly">
        <ExampleUnstyledPopper trigger="hover">HOVER</ExampleUnstyledPopper>
        <ExampleUnstyledPopper trigger="hover-none">
          HOVER-NONE
        </ExampleUnstyledPopper>
        <ExampleUnstyledPopper trigger="hover-click">
          HOVER-CLICK
        </ExampleUnstyledPopper>
      </UnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
