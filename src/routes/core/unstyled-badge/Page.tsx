import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { BorderExample } from './BorderExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';
import { MarginExample } from './MarginExample';
import { MarginMBExample } from './MarginMBExample';
import { MarginMExample } from './MarginMExample';
import { MarginMLExample } from './MarginMLExample';
import { MarginMRExample } from './MarginMRExample';
import { MarginMTExample } from './MarginMTExample';
import { MarginMXExample } from './MarginMXExample';
import { MarginMYExample } from './MarginMYExample';
import { MaxExample } from './MaxExample';
import { OverlapExample } from './OverlapExample';
import { PlacementExample } from './PlacementExample';
import { RadiusExample } from './RadiusExample';
import { RadiusRBExample } from './RadiusRBExample';
import { RadiusRBLExample } from './RadiusRBLExample';
import { RadiusRBRExample } from './RadiusRBRExample';
import { RadiusRExample } from './RadiusRExample';
import { RadiusRLExample } from './RadiusRLExample';
import { RadiusRRExample } from './RadiusRRExample';
import { RadiusRTExample } from './RadiusRTExample';
import { RadiusRTLExample } from './RadiusRTLExample';
import { RadiusRTRExample } from './RadiusRTRExample';
import { RingExample } from './RingExample';
import { ShadowExample } from './ShadowExample';
import { ShowZeroExample } from './ShowZeroExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>UnstyledBadge</ExampleTitle>
    <DefaultExample />
    <MaxExample />
    <ShowZeroExample />
    <PlacementExample />
    <OverlapExample />
    <SizeExample />
    <VariantExample />
    <MarginExample />
    <MarginMExample />
    <MarginMXExample />
    <MarginMYExample />
    <MarginMTExample />
    <MarginMBExample />
    <MarginMLExample />
    <MarginMRExample />
    <BorderExample />
    <RadiusExample />
    <RadiusRExample />
    <RadiusRTExample />
    <RadiusRBExample />
    <RadiusRLExample />
    <RadiusRRExample />
    <RadiusRTLExample />
    <RadiusRTRExample />
    <RadiusRBLExample />
    <RadiusRBRExample />
    <ColorExample />
    <ShadowExample />
    <RingExample />
    <GapExample />
  </>
);

export default Page;
