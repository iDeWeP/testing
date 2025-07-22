import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { GapExample } from './GapExample';
import { OrientationExample } from './OrientationExample';
import { PaddingExample } from './PaddingExample';
import { RadiusExample } from './RadiusExample';
import { ShadowExample } from './ShadowExample';
import { VariantExample } from './VariantExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>UnstyledDropdown</ExampleTitle>
    <DefaultExample />
    <VariantExample />
    <OrientationExample />
    <PaddingExample />
    <RadiusExample />
    <ColorExample />
    <ShadowExample />
    <GapExample />
  </>
);

export default Page;
