import type { ReactNode } from 'react';
import { ExampleTitle } from '../../../components/ExampleTitle';
import { DefaultExample } from './DefaultExample';
import { DurationExample } from './DurationExample';
import { PeakExample } from './PeakExample';
import { TransitionExample } from './TransitionExample';
import { UnmountOnExitExample } from './UnmountOnExitExample';

const Page = (): ReactNode => (
  <>
    <ExampleTitle>Transition</ExampleTitle>
    <DefaultExample />
    <UnmountOnExitExample />
    <PeakExample />
    <TransitionExample />
    <DurationExample />
  </>
);

export default Page;
