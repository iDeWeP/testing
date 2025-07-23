import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { BorderExample } from './BorderExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';
import { InitialsExample } from './InitialsExample';
import { MarginExample } from './MarginExample';
import { MarginMBExample } from './MarginMBExample';
import { MarginMExample } from './MarginMExample';
import { MarginMLExample } from './MarginMLExample';
import { MarginMRExample } from './MarginMRExample';
import { MarginMTExample } from './MarginMTExample';
import { MarginMXExample } from './MarginMXExample';
import { MarginMYExample } from './MarginMYExample';
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
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>UnstyledAvatar</ExampleTitle>
    <DefaultExample />
    <InitialsExample />
    <VariantExample />
    <SizeExample />
    <ColorExample />
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
    <ShadowExample />
    <RingExample />
    <GapExample />
  </>
);

export default Page;
