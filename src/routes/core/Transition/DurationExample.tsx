import type { ReactNode } from 'react';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const DurationExample = (): ReactNode => (
  <ExampleSection title="Duration">
    <Example duration={3000}>3000</Example>
  </ExampleSection>
);
