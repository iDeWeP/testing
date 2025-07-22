import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { MaxExample } from './MaxExample';
import { OverlapExample } from './OverlapExample';
import { PlacementExample } from './PlacementExample';
import { ShowZeroExample } from './ShowZeroExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Badge</ExampleTitle>
    <DefaultExample />
    <MaxExample />
    <ShowZeroExample />
    <VariantExample />
    <PlacementExample />
    <OverlapExample />
    <SizeExample />
    <ColorExample />
  </>
);

export default Page;
