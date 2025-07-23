import type { ReactNode } from 'react';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PeakExample = (): ReactNode => (
  <ExampleSection title="Peak">
    <Example peak={50}>50</Example>
  </ExampleSection>
);
