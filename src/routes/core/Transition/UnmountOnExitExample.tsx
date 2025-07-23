import type { ReactNode } from 'react';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const UnmountOnExitExample = (): ReactNode => (
  <ExampleSection title="Unmount on exit">
    <Example unmountOnExit={false}>FALSE</Example>
    <Example unmountOnExit>TRUE</Example>
  </ExampleSection>
);
