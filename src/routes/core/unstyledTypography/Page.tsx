import { ExampleTitle } from '../../../components/ExampleTitle';
import { AlignExample } from './AlignExample';
import { DefaultExample } from './DefaultExample';
import { OverflowExample } from './OverflowExample';
import { SizeExample } from './SizeExample';
import { UnderlineExample } from './UnderlineExample';
import { WeightExample } from './WeightExample';
import WordBreakExample from './WordBreakExample';
import WrapExample from './WrapExample';

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
  </>
);

export default Page;
