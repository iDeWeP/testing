import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { FontExample } from './FontExample';
import { PlacementExample } from './PlacementExample';

const Page = () => (
  <>
    <ExampleTitle>Label</ExampleTitle>
    <DefaultExample />
    <PlacementExample />
    <FontExample />
    <ColorExample />
  </>
);

export default Page;
