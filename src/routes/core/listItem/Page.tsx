import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';
import { OrientationExample } from './OrientationExample';
import { RadiusExample } from './RadiusExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>ListItem</ExampleTitle>
    <DefaultExample />
    <VariantExample />
    <OrientationExample />
    <SizeExample />
    <RadiusExample />
    <ColorExample />
    <GapExample />
  </>
);

export default Page;
