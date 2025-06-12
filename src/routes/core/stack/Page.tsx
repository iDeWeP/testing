import { ExampleTitle } from '../../../components/ExampleTitle';
import { SizeExample } from '../title/SizeExample';
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
import { VariantExample } from './VariantExample';
import { WrapExample } from './WrapExample';

const Page = () => (
  <>
    <ExampleTitle>Stack</ExampleTitle>
    <DefaultExample />
    <DirectionExample />
    <WrapExample />
    <JustifyExample />
    <AlignExample />
    <GapExample />
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
