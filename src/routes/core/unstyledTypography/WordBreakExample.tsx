import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const WordBreakExample = () => (
  <ExampleSection title="Word break">
    <ExampleCard>
      <ExampleUnstyledTypography wordBreak="normal">
        NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL
        NORMAL NORMAL NORMAL NORMAL NORMAL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography wordBreak="words">
        WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS
        WORDS WORDS WORDS
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography wordBreak="all">
        ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL
        ALL ALL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography wordBreak="keep">
        KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP
        KEEP
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
