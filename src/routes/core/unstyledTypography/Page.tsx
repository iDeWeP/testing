import { ExampleTitle } from '../../../components/ExampleTitle';
import { AlignExample } from './AlignExample';
import { BorderExample } from './BorderExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { MarginExample } from './MarginExample';
import { OverflowExample } from './OverflowExample';
import { RadiusExample } from './RadiusExample';
import { ScaleExample } from './ScaleExample';
import { SizeExample } from './SizeExample';
import { UnderlineExample } from './UnderlineExample';
import { VariantExample } from './VariantExample';
import { WeightExample } from './WeightExample';
import { WordBreakExample } from './WordBreakExample';
import { WrapExample } from './WrapExample';

const Page = () => (
  <>
    <ExampleTitle>UnstyledTypography</ExampleTitle>
    <DefaultExample />
    <SizeExample />
    <WeightExample />
    <UnderlineExample />
    <WordBreakExample />
    <WrapExample />
    <AlignExample />
    <OverflowExample />
    <VariantExample />
    <ScaleExample />
    <MarginExample />
    <BorderExample />
    <RadiusExample />
    <ColorExample />
  </>
);

export default Page;
