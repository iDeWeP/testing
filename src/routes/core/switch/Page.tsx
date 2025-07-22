import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DisabledExample } from './DisabledExample';
import { RippleExample } from './RippleExample';
import { ScaleExample } from './ScaleExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>Switch</ExampleTitle>
    <DefaultExample />
    <DisabledExample />
    <VariantExample />
    <SizeExample />
    <ScaleExample />
    <ColorExample />
    <RippleExample />
  </>
);

export default Page;
