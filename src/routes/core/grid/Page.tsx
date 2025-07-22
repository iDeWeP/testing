import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { GapYExample } from '../box/GapYExample';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';
import { GapXExample } from './GapXExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Grid</ExampleTitle>
    <DefaultExample />
    <GapExample />
    <GapXExample />
    <GapYExample />
  </>
);

export default Page;
