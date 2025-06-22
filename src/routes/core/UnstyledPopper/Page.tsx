import { ExampleTitle } from '../../../components/ExampleTitle';
import { CloseOnEscExample } from './CloseOnEscExample';
import { CloseOnOutClickExample } from './CloseOnOutClick';
import { DefaultExample } from './DefaultExample';
import { DurationExample } from './DurationExample';
import { FloatExample } from './FloatExample';
import { FocusOnCloseExample } from './FocusOnClose';
import { FocusOnOpenExample } from './FocusOnOpen';
import { FocusTrapExample } from './FocusTrapExample';
import { FollowCursorExample } from './FollowCursorExample';
import { LockScrollExample } from './LockScrollExample';
import { OffsetExample } from './OffsetExample';
import { PeakExample } from './PeakExample';
import { PlacementExample } from './PlacementExample';
import { PortalExample } from './PortalExample';
import { TriggerExample } from './TriggerExample';
import { UnmountOnExitExample } from './UnmountOnExitExample';
import { ZIndexExample } from './ZIndexExample';

const Page = () => (
  <>
    <ExampleTitle>Popper</ExampleTitle>
    <DefaultExample />
    <FloatExample />
    <TriggerExample />
    <FollowCursorExample />
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
    <ZIndexExample />
    <DurationExample />
    <PortalExample />
  </>
);

export default Page;
