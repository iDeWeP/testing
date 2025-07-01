import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const AlignExample = () => (
  <ExampleSection title="Align">
    <ExampleCard>
      <ExampleUnstyledTypography
        clear
        align="left"
      >
        LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT
        LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        align="right"
      >
        RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT
        RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        align="center"
      >
        CENTER CENTER CENTER CENTER CENTER CENTER CENTER CENTER CENTER CENTER
        CENTER CENTER CENTER CENTER CENTER
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        align="justify"
      >
        JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY
        JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
