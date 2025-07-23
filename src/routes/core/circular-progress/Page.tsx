import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DisabledExample } from './DisabledExample';
import { GapExample } from './GapExample';
import { SizeExample } from './SizeExample';
import { SpinExample } from './SpinExample';
import { ThicknessExample } from './ThicknessExample';
import { ValueExample } from './ValueExample';
import { VariantExample } from './VariantExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>CircularProgress</ExampleTitle>
    <DefaultExample />
    <DisabledExample />
    <SpinExample />
    <ValueExample />
    <VariantExample />
    <SizeExample />
    <ThicknessExample />
    <ColorExample />
    <GapExample />
  </>
);

export default Page;
