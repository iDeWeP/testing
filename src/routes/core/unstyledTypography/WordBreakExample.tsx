import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const WordBreakExample = () => (
  <ExampleSection title="Word break">
    <ExampleCard>
      <Example wordBreak="normal">
        NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL NORMAL
        NORMAL NORMAL NORMAL NORMAL NORMAL
      </Example>
      <Example wordBreak="words">
        WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS
        WORDS WORDS WORDS
      </Example>
      <Example wordBreak="all">
        ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL ALL
        ALL ALL
      </Example>
      <Example wordBreak="keep">
        KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP KEEP
        KEEP
      </Example>
    </ExampleCard>
  </ExampleSection>
);
