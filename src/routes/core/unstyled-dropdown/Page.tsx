import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { BorderExample } from './BorderExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { FontExample } from './FontExample';
import { GapExample } from './GapExample';
import { GapXExample } from './GapXExample';
import { GapYExample } from './GapYExample';
import { OrientationExample } from './OrientationExample';
import { PaddingExample } from './PaddingExample';
import { PaddingPBExample } from './PaddingPBExample';
import { PaddingPExample } from './PaddingPExample';
import { PaddingPLExample } from './PaddingPLExample';
import { PaddingPRExample } from './PaddingPRExample';
import { PaddingPTExample } from './PaddingPTExample';
import { PaddingPXExample } from './PaddingPXExample';
import { PaddingPYExample } from './PaddingPYExample';
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
import { VariantExample } from './VariantExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>UnstyledDropdown</ExampleTitle>
    <DefaultExample />
    <VariantExample />
    <OrientationExample />
    <PaddingExample />
    <PaddingPExample />
    <PaddingPXExample />
    <PaddingPYExample />
    <PaddingPTExample />
    <PaddingPBExample />
    <PaddingPLExample />
    <PaddingPRExample />
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
    <FontExample />
    <ColorExample />
    <ShadowExample />
    <RingExample />
    <GapExample />
    <GapXExample />
    <GapYExample />
  </>
);

export default Page;
