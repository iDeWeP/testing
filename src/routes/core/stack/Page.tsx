import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Stack</ExampleTitle>
    <DefaultExample />
    <GapExample />
  </>
);

export default Page;
