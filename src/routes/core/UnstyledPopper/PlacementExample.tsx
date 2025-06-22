import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlexBox } from '../../../core/components/UnstyledFlexBox/UnstyledFlexBox';
import { ExamplePopper } from './ExamplePopper';

export const PlacementExample = () => (
  <ExampleSection title="Placement">
    <ExampleCard
      vertical
      stretch
    >
      <UnstyledFlexBox justify="evenly">
        <ExamplePopper placement="top-start">TOP-START</ExamplePopper>
        <ExamplePopper placement="top">TOP</ExamplePopper>
        <ExamplePopper placement="top-end">TOP-END</ExamplePopper>
      </UnstyledFlexBox>
      <UnstyledFlexBox justify="evenly">
        <ExamplePopper placement="bottom-start">BOTTOM-START</ExamplePopper>
        <ExamplePopper placement="bottom">BOTTOM</ExamplePopper>
        <ExamplePopper placement="bottom-end">BOTTOM-END</ExamplePopper>
      </UnstyledFlexBox>
      <UnstyledFlexBox justify="evenly">
        <ExamplePopper placement="left-start">LEFT-START</ExamplePopper>
        <ExamplePopper placement="left">LEFT</ExamplePopper>
        <ExamplePopper placement="left-end">LEFT-END</ExamplePopper>
      </UnstyledFlexBox>
      <UnstyledFlexBox justify="evenly">
        <ExamplePopper placement="right-start">RIGHT-START</ExamplePopper>
        <ExamplePopper placement="right">RIGHT</ExamplePopper>
        <ExamplePopper placement="right-end">RIGHT-END</ExamplePopper>
      </UnstyledFlexBox>
    </ExampleCard>
  </ExampleSection>
);
