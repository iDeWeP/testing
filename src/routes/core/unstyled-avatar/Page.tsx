import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { InitialsExample } from './InitialsExample';
import { RingExample } from './RingExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>UnstyledAvatar</ExampleTitle>
    <DefaultExample />
    <InitialsExample />
    <VariantExample />
    <SizeExample />
    <ColorExample />
    <RingExample />
  </>
);

export default Page;
