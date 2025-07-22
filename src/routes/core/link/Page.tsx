import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DisabledExample } from './DisabledExample';
import { EffectExample } from './EffectExample';
import { LoadingExample } from './LoadingExample';
import { RadiusExample } from './RadiusExample';
import { ScaleExample } from './ScaleExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Link</ExampleTitle>
    <DefaultExample />
    <LoadingExample />
    <DisabledExample />
    <VariantExample />
    <SizeExample />
    <ScaleExample />
    <RadiusExample />
    <ColorExample />
    <EffectExample />
  </>
);

export default Page;
