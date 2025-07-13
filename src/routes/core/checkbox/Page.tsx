import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DisabledExample } from './DisabledExample';
import { InvalidExample } from './InvalidExample';
import { RadiusExample } from './RadiusExample';
import { RippleExample } from './RippleExample';
import { SizeExample } from './SizeExample';
import { ValidExample } from './ValidExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>Checkbox</ExampleTitle>
    <DefaultExample />
    <ValidExample />
    <InvalidExample />
    <DisabledExample />
    <VariantExample />
    <SizeExample />
    <RadiusExample />
    <ColorExample />
    <RippleExample />
  </>
);

export default Page;
