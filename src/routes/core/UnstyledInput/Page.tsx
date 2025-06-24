import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DisabledExample } from './DisabledExample';
import { InvalidExample } from './InvalidExample';
import { MarginExample } from './MarginExample';
import { RadiusExample } from './RadiusExample';
import { ScaleExample } from './ScaleExample';
import { SizeExample } from './SizeExample';
import { ValidExample } from './ValidExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>Input</ExampleTitle>
    <DefaultExample />
    <ValidExample />
    <InvalidExample />
    <DisabledExample />
    <VariantExample />
    <SizeExample />
    <ScaleExample />
    <MarginExample />
    <RadiusExample />
    <ColorExample />
  </>
);

export default Page;
