import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const WordBreakExample = () => (
  <ExampleSection title="Word break">
    <ExampleCard>
      <ExampleUnstyledTypography
        clear
        wordBreak="normal"
      >
        NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL
        NORMAL NORMAL NORMAL NORMAL NORMAL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        wordBreak="words"
      >
        WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS
        WORDS WORDS WORDS
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        wordBreak="all"
      >
        ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL
        ALL ALL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        wordBreak="keep"
      >
        KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP
        KEEP
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
