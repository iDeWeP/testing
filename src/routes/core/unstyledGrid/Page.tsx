import { ExampleTitle } from '../../../components/ExampleTitle';
import { AlignExample } from '../unstyledFlex/AlignExample';
import { DirectionExample } from '../unstyledFlex/DirectionExample';
import { JustifyExample } from '../unstyledFlex/JustifyExample';
import { WrapExample } from '../unstyledFlex/WrapExample';
import { BorderExample } from './BorderExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';
import { MarginExample } from './MarginExample';
import { RadiusExample } from './RadiusExample';
import { ScaleExample } from './ScaleExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>UnstyledGrid</ExampleTitle>
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
