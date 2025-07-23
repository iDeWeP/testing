import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { BorderExample } from './BorderExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DisabledExample } from './DisabledExample';
import { InvalidExample } from './InvalidExample';
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
import { RippleExample } from './RippleExample';
import { ShadowExample } from './ShadowExample';
import { SizeExample } from './SizeExample';
import { ValidExample } from './ValidExample';
import { VariantExample } from './VariantExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>UnstyledCheckbox</ExampleTitle>
    <DefaultExample />
    <ValidExample />
    <InvalidExample />
    <DisabledExample />
    <VariantExample />
    <SizeExample />
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
    <RippleExample />
  </>
);

export default Page;
