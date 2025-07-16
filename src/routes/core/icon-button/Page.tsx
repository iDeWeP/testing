import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DisabledExample } from './DisabledExample';
import { EffectExample } from './EffectExample';
import { LoadingExample } from './LoadingExample';
import { RadiusExample } from './RadiusExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>IconButton</ExampleTitle>
    <DefaultExample />
    <LoadingExample />
    <DisabledExample />
    <VariantExample />
    <SizeExample />
    <RadiusExample />
    <ColorExample />
    <EffectExample />
  </>
);

export default Page;
