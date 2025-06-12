import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Footer } from '../../../core/components/Footer/Footer';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Footer
        size="md"
        scale="normal"
      >
        NORMAL
      </Footer>
      <Footer
        size="md"
        scale="fit"
      >
        FIT
      </Footer>
      <Footer
        size="md"
        scale="full"
      >
        FULL
      </Footer>
    </ExampleCard>
  </ExampleSection>
);
