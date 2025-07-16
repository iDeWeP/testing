import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DisabledExample } from './DisabledExample';
import { InvalidExample } from './InvalidExample';
import { RadiusExample } from './RadiusExample';
import { ResizeExample } from './ResizeExampe';
import { SizeExample } from './SizeExample';
import { ValidExample } from './ValidExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>Textarea</ExampleTitle>
    <DefaultExample />
    <ValidExample />
    <InvalidExample />
    <DisabledExample />
    <VariantExample />
    <SizeExample />
    <ResizeExample />
    <RadiusExample />
    <ColorExample />
  </>
);

export default Page;
