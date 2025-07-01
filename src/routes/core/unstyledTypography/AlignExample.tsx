import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const AlignExample = () => (
  <ExampleSection title="Align">
    <ExampleCard vertical>
      <UnstyledTypography
        variant="none"
        align="left"
      >
        LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT
        LEFT
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        align="right"
      >
        RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT
        RIGHT RIGHT RIGHT
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        align="center"
      >
        CENTER CENTER CENTER CENTER CENTER CENTER CENTER CENTER CENTER CENTER
        CENTER CENTER CENTER CENTER CENTER
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        align="justify"
      >
        JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY
        JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY JUSTIFY
      </UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
