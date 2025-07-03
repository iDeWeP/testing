import { ExampleTitle } from '../../../components/ExampleTitle';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';
import { GapXExample } from './GapXExample';
import { GapYExample } from './GapYExample';

const Page = () => (
  <>
    <ExampleTitle>Grid</ExampleTitle>
    <DefaultExample />
    <GapExample />
    <GapXExample />
    <GapYExample />
  </>
);

export default Page;
