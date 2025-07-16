import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { FontExample } from './FontExample';
import { GapExample } from './GapExample';
import { OrientationExample } from './OrientationExample';
import { PaddingExample } from './PaddingExample';
import { PlacementExample } from './PlacementExample';

const Page = () => (
  <>
    <ExampleTitle>Divider</ExampleTitle>
    <DefaultExample />
    <OrientationExample />
    <PlacementExample />
    <PaddingExample />
    <FontExample />
    <ColorExample />
    <GapExample />
  </>
);

export default Page;
