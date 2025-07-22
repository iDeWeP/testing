import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { FontExample } from './FontExample';
import { GapExample } from './GapExample';
import { PlacementExample } from './PlacementExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Label</ExampleTitle>
    <DefaultExample />
    <PlacementExample />
    <FontExample />
    <ColorExample />
    <GapExample />
  </>
);

export default Page;
