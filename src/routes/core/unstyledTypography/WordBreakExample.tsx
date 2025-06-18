import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const WordBreakExample = () => (
  <ExampleSection title="Word break">
    <ExampleCard>
      <UnstyledTypography wordBreak="normal">NORMAL</UnstyledTypography>
      <UnstyledTypography wordBreak="words">WORDS</UnstyledTypography>
      <UnstyledTypography wordBreak="all">ALL</UnstyledTypography>
      <UnstyledTypography wordBreak="keep">KEEP</UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
