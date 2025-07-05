import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';
import { OrientationExample } from './OrientationExample';
import { RadiusExample } from './RadiusExample';
import { ShadowExample } from './ShadowExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>Card</ExampleTitle>
    <DefaultExample />
    <VariantExample />
    <OrientationExample />
    <SizeExample />
    <RadiusExample />
    <ColorExample />
    <ShadowExample />
    <GapExample />
  </>
);

export default Page;
