import { ExampleTitle } from '../../../components/ExampleTitle';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';
import { OrientationExample } from './OrientationExample';
import { SpacingExample } from './SpacingExample';

const Page = () => (
  <>
    <ExampleTitle>UnstyledGroup</ExampleTitle>
    <DefaultExample />
    <OrientationExample />
    <SpacingExample />
    <GapExample />
  </>
);

export default Page;
