import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { FontExample } from './FontExample';

const Page = () => (
  <>
    <ExampleTitle>Mark</ExampleTitle>
    <DefaultExample />
    <FontExample />
    <ColorExample />
  </>
);

export default Page;
