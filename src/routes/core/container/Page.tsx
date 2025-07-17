import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { RadiusExample } from './RadiusExample';
import { ScaleExample } from './ScaleExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>Container</ExampleTitle>
    <DefaultExample />
    <VariantExample />
    <SizeExample />
    <ScaleExample />
    <RadiusExample />
    <ColorExample />
  </>
);

export default Page;
