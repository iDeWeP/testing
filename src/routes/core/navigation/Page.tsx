import { ExampleTitle } from '../../../components/ExampleTitle';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';
import { OrientationExample } from './OrientationExample';

const Page = () => (
  <>
    <ExampleTitle>Navigation</ExampleTitle>
    <DefaultExample />
    <OrientationExample />
    <GapExample />
  </>
);

export default Page;
