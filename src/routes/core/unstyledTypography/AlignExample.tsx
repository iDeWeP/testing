import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const AlignExample = () => (
  <ExampleSection title="Align">
    <ExampleCard>
      <Example align="left">
        LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT
        LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT
      </Example>
      <Example align="right">
        RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT
        RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT
      </Example>
      <Example align="center">
        CENTER CENTER CENTER CENTER CENTER CENTER CENTER CENTER CENTER CENTER
        CENTER CENTER CENTER CENTER CENTER
      </Example>
      <Example align="justify">
        JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY
        JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY
      </Example>
    </ExampleCard>
  </ExampleSection>
);
