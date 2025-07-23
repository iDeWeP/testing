import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { FontExample } from './FontExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Text</ExampleTitle>
    <DefaultExample />
    <FontExample />
    <ColorExample />
  </>
);

export default Page;
