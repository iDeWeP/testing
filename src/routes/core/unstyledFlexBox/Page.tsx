import { ExampleTitle } from '../../../components/ExampleTitle';
import { AlignExample } from './AlignExample';
import { DefaultExample } from './DefaultExample';
import { DirectionExample } from './DirectionExample';
import { GapExample } from './GapExample';
import { JustifyExample } from './JustifyExample';
import { WrapExample } from './WrapExample';

const Page = () => (
  <>
    <ExampleTitle>UnstyledFlexBox</ExampleTitle>
    <DefaultExample />
    <DirectionExample />
    <WrapExample />
    <JustifyExample />
    <AlignExample />
    <GapExample />
  </>
);

export default Page;
