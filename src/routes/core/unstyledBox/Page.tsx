import { ExampleTitle } from '../../../components/ExampleTitle';
import { BorderExample } from './BorderExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { MarginExample } from './MarginExample';
import { RadiusExample } from './RadiusExample';
import { ScaleExample } from './ScaleExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>UnstyledBox</ExampleTitle>
    <DefaultExample />
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
