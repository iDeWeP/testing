import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';
import { MaxExample } from './MaxExample';
import { OrientationExample } from './OrientationExample';
import { SurplusExample } from './SurplusExample';
import { TotalExample } from './TotalExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>AvatarGroup</ExampleTitle>
    <DefaultExample />
    <MaxExample />
    <TotalExample />
    <OrientationExample />
    <GapExample />
    <SurplusExample />
  </>
);

export default Page;
