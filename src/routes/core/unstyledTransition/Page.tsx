import { ExampleTitle } from '../../../components/ExampleTitle';
import { BorderExample } from './BorderExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DurationExample } from './DurationExample';
import { MarginExample } from './MarginExample';
import { PeakExample } from './PeakExample';
import { RadiusExample } from './RadiusExample';
import { ScaleExample } from './ScaleExample';
import { SizeExample } from './SizeExample';
import { TransitionExample } from './TransitionExample';
import { UnmountOnExitExample } from './UnmountOnExitExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>UnstyledTransition</ExampleTitle>
    <DefaultExample />
    <UnmountOnExitExample />
    <PeakExample />
    <TransitionExample />
    <DurationExample />
    <VariantExample />
    <SizeExample />
    <ScaleExample />
    <MarginExample />
    <BorderExample />
    <RadiusExample />
    <ColorExample />
  </>
);

export default Page;
