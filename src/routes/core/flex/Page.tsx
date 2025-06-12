import { ExampleTitle } from '../../../components/ExampleTitle';
import { AlignExample } from './AlignExample';
import { BorderExample } from './BorderExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DirectionExample } from './DirectionExample';
import { GapExample } from './GapExample';
import { JustifyExample } from './JustifyExample';
import { MarginExample } from './MarginExample';
import { RadiusExample } from './RadiusExample';
import { ScaleExample } from './ScaleExample';
import { SpacingExample } from './SpacingExample';
import { VariantExample } from './VariantExample';
import { WrapExample } from './WrapExample';

const Page = () => (
  <>
    <ExampleTitle>Flex</ExampleTitle>
    <DirectionExample />
    <WrapExample />
    <JustifyExample />
    <AlignExample />
    <GapExample />
    <DefaultExample />
    <VariantExample />
    <ScaleExample />
    <SpacingExample />
    <MarginExample />
    <BorderExample />
    <RadiusExample />
    <ColorExample />
  </>
);

export default Page;
