import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { FontExample } from './FontExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>Anchor</ExampleTitle>
    <DefaultExample />
    <VariantExample />
    <FontExample />
    <ColorExample />
  </>
);

export default Page;
