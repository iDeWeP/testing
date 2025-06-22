import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlexBox } from '../../../core/components/UnstyledFlexBox/UnstyledFlexBox';
import { ExamplePopper } from './ExamplePopper';

export const TriggerExample = () => (
  <ExampleSection title="Trigger">
    <ExampleCard
      vertical
      stretch
    >
      <UnstyledFlexBox justify="evenly">
        <ExamplePopper trigger="none">NONE</ExamplePopper>
        <ExamplePopper trigger="none-click">NONE-CLICK</ExamplePopper>
        <ExamplePopper trigger="none-hover">NONE-HOVER</ExamplePopper>
      </UnstyledFlexBox>
      <UnstyledFlexBox justify="evenly">
        <ExamplePopper trigger="click">CLICK</ExamplePopper>
        <ExamplePopper trigger="click-none">CLICK-NONE</ExamplePopper>
        <ExamplePopper trigger="click-hover">CLICK-HOVER</ExamplePopper>
      </UnstyledFlexBox>
      <UnstyledFlexBox justify="evenly">
        <ExamplePopper trigger="hover">HOVER</ExamplePopper>
        <ExamplePopper trigger="hover-none">HOVER-NONE</ExamplePopper>
        <ExamplePopper trigger="hover-click">HOVER-CLICK</ExamplePopper>
      </UnstyledFlexBox>
    </ExampleCard>
  </ExampleSection>
);
