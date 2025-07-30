import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { DefaultExample } from './DefaultExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Text</ExampleTitle>
    <DefaultExample />
  </>
);

export default Page;
