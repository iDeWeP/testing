import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DisabledExample } from './DisabledExample';
import { OrientationExample } from './OrientationExample';
import { RadiusExample } from './RadiusExample';
import { SizeExample } from './SizeExample';
import { ValueExample } from './ValueExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>LinearProgress</ExampleTitle>
    <DefaultExample />
    <DisabledExample />
    <ValueExample />
    <VariantExample />
    <OrientationExample />
    <SizeExample />
    <RadiusExample />
    <ColorExample />
  </>
);

export default Page;
