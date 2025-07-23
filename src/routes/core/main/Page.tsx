import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';
import { OrientationExample } from './OrientationExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Main</ExampleTitle>
    <DefaultExample />
    <OrientationExample />
    <GapExample />
  </>
);

export default Page;
