import type { ReactNode } from 'react';
import type { ExampleTitle } from '../../../components/ExampleTitle';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Flex</ExampleTitle>
    <DefaultExample />
    <GapExample />
  </>
);

export default Page;
