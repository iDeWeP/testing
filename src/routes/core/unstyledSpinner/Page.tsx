import { ExampleTitle } from '../../../components/ExampleTitle';
import { BorderExample } from './BorderExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DisabledExample } from './DisabledExample';
import { FloatExample } from './FloatExample';
import { MarginExample } from './MarginExample';
import { ScaleExample } from './ScaleExample';
import { SizeExample } from './SizeExample';
import { SpinExample } from './SpinExample';
import { ThicknessExample } from './ThicknessExample';
import { ValueExample } from './ValueExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>UnstyledSpinner</ExampleTitle>
    <DefaultExample />
    <SpinExample />
    <DisabledExample />
    <ValueExample />
    <VariantExample />
    <FloatExample />
    <SizeExample />
    <ScaleExample />
    <ThicknessExample />
    <MarginExample />
    <BorderExample />
    <ColorExample />
  </>
);

export default Page;
