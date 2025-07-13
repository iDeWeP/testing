import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { MaxExample } from './MaxExample';
import { OverlapExample } from './OverlapExample';
import { PlacementExample } from './PlacementExample';
import { RadiusExample } from './RadiusExample';
import { RingExample } from './RingExample';
import { ShadowExample } from './ShadowExample';
import { ShowZeroExample } from './ShowZeroExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>Badge</ExampleTitle>
    <DefaultExample />
    <MaxExample />
    <ShowZeroExample />
    <VariantExample />
    <PlacementExample />
    <OverlapExample />
    <SizeExample />
    <RadiusExample />
    <ColorExample />
    <RingExample />
    <ShadowExample />
  </>
);

export default Page;
