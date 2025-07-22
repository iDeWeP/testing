import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { DefaultExample } from './DefaultExample';
import { RadiusExample } from './RadiusExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Image</ExampleTitle>
    <DefaultExample />
    <RadiusExample />
  </>
);

export default Page;
