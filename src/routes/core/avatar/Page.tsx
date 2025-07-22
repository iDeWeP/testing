import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { InitialsExample } from './InitialsExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Avatar</ExampleTitle>
    <DefaultExample />
    <InitialsExample />
    <VariantExample />
    <SizeExample />
    <ColorExample />
  </>
);

export default Page;
