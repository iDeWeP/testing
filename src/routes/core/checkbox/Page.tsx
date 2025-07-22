import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DisabledExample } from './DisabledExample';
import { InvalidExample } from './InvalidExample';
import { RippleExample } from './RippleExample';
import { SizeExample } from './SizeExample';
import { ValidExample } from './ValidExample';
import { VariantExample } from './VariantExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Checkbox</ExampleTitle>
    <DefaultExample />
    <ValidExample />
    <InvalidExample />
    <DisabledExample />
    <VariantExample />
    <SizeExample />
    <ColorExample />
    <RippleExample />
  </>
);

export default Page;
