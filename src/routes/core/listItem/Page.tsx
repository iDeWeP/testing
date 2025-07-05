import { ExampleTitle } from '../../../components/ExampleTitle';
import { FontExample } from '../text/FontExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>ListItem</ExampleTitle>
    <DefaultExample />
    <VariantExample />
    <FontExample />
    <ColorExample />
  </>
);

export default Page;
