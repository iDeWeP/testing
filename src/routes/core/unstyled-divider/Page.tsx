import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { FontExample } from './FontExample';
import { GapExample } from './GapExample';
import { MarginExample } from './MarginExample';
import { MarginMBExample } from './MarginMBExample';
import { MarginMExample } from './MarginMExample';
import { MarginMLExample } from './MarginMLExample';
import { MarginMRExample } from './MarginMRExample';
import { MarginMTExample } from './MarginMTExample';
import { MarginMXExample } from './MarginMXExample';
import { MarginMYExample } from './MarginMYExample';
import { OrientationExample } from './OrientationExample';
import { PaddingExample } from './PaddingExample';
import { PaddingPBExample } from './PaddingPBExample';
import { PaddingPExample } from './PaddingPExample';
import { PaddingPLExample } from './PaddingPLExample';
import { PaddingPRExample } from './PaddingPRExample';
import { PaddingPTExample } from './PaddingPTExample';
import { PaddingPXExample } from './PaddingPXExample';
import { PaddingPYExample } from './PaddingPYExample';
import { PlacementExample } from './PlacementExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>UnstyledDivider</ExampleTitle>
    <DefaultExample />
    <OrientationExample />
    <PlacementExample />
    <PaddingExample />
    <PaddingPExample />
    <PaddingPXExample />
    <PaddingPYExample />
    <PaddingPTExample />
    <PaddingPBExample />
    <PaddingPLExample />
    <PaddingPRExample />
    <MarginExample />
    <MarginMExample />
    <MarginMXExample />
    <MarginMYExample />
    <MarginMTExample />
    <MarginMBExample />
    <MarginMLExample />
    <MarginMRExample />
    <FontExample />
    <ColorExample />
    <GapExample />
  </>
);

export default Page;
