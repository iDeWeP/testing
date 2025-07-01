import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const WordBreakExample = () => (
  <ExampleSection title="Word break">
    <ExampleCard>
      <UnstyledTypography
        variant="none"
        wordBreak="normal"
      >
        NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL
        NORMAL NORMAL NORMAL NORMAL NORMAL
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        wordBreak="words"
      >
        WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS
        WORDS WORDS WORDS
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        wordBreak="all"
      >
        ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL
        ALL ALL
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        wordBreak="keep"
      >
        KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP
        KEEP
      </UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
