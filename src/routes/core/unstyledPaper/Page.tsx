import { ExampleTitle } from '../../../components/ExampleTitle';
import { AlignExample } from './AlignExample';
import { BorderExample } from './BorderExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';
import { JustifyExample } from './JustifyExample';
import { MarginExample } from './MarginExample';
import { OrientationExample } from './OrientationExample';
import { RadiusExample } from './RadiusExample';
import { ScaleExample } from './ScaleExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>UnstyledPaper</ExampleTitle>
    <DefaultExample />
    <OrientationExample />
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
