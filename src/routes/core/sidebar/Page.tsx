import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { DefaultExample } from './DefaultExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Sidebar</ExampleTitle>
    <DefaultExample />
  </>
);

export default Page;
