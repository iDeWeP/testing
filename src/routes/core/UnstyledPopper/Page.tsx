import { ExampleTitle } from '../../../components/ExampleTitle';
import { CloseOnEscExample } from './CloseOnEscExample';
import { CloseOnOutClickExample } from './CloseOnOutClick';
import { CollisionExample } from './CollisionExample';
import { DefaultExample } from './DefaultExample';
import { DurationExample } from './DurationExample';
import { FocusOnCloseExample } from './FocusOnClose';
import { FocusOnOpenExample } from './FocusOnOpen';
import { FocusTrapExample } from './FocusTrapExample';
import { FollowCursorExample } from './FollowCursorExample';
import { LockScrollExample } from './LockScrollExample';
import { OffsetExample } from './OffsetExample';
import { PeakExample } from './PeakExample';
import { PlacementExample } from './PlacementExample';
import { PortalExample } from './PortalExample';
import { ThresholdExample } from './ThresholdExample';
import { TransitionExample } from './TransitionExample';
import { UnmountOnExitExample } from './UnmountOnExitExample';
import { ZIndexExample } from './ZIndexExample';
const Page = () => (
  <>
    <ExampleTitle>UnstyledPopper</ExampleTitle>
    <DefaultExample />
    <FollowCursorExample />
    <CollisionExample />
    <CloseOnOutClickExample />
    <CloseOnEscExample />
    <FocusOnOpenExample />
    <FocusOnCloseExample />
    <FocusTrapExample />
    <LockScrollExample />
    <UnmountOnExitExample />
    <PeakExample />
    <PlacementExample />
    <OffsetExample />
    <ThresholdExample />
    <ZIndexExample />
    <TransitionExample />
    <DurationExample />
    <PortalExample />
  </>
);

export default Page;
