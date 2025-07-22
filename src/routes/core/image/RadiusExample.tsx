import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';
import imagePath from '../../../assets/images/photo.png';

export const RadiusExample = (): ReactNode => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Example
        radius="unset"
        src={imagePath}
      />
      <Example
        radius="none"
        src={imagePath}
      />
      <Example
        radius="xs"
        src={imagePath}
      />
      <Example
        radius="sm"
        src={imagePath}
      />
      <Example
        radius="md"
        src={imagePath}
      />
      <Example
        radius="lg"
        src={imagePath}
      />
      <Example
        radius="xl"
        src={imagePath}
      />
      <Example
        radius="xxl"
        src={imagePath}
      />
      <Example
        radius="full"
        src={imagePath}
      />
    </ExampleCard>
  </ExampleSection>
);
