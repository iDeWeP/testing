import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Footer } from '../../../core/components/Footer/Footer';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Footer
        variant="solid"
        color="neutral"
      >
        NEUTRAL
      </Footer>
      <Footer
        variant="solid"
        color="primary"
      >
        PRIMARY
      </Footer>
      <Footer
        variant="solid"
        color="secondary"
      >
        SECONDARY
      </Footer>
      <Footer
        variant="solid"
        color="tertiary"
      >
        TERTIARY
      </Footer>
      <Footer
        variant="solid"
        color="success"
      >
        SUCCESS
      </Footer>
      <Footer
        variant="solid"
        color="warning"
      >
        WARNING
      </Footer>
      <Footer
        variant="solid"
        color="error"
      >
        ERROR
      </Footer>
    </ExampleCard>
  </ExampleSection>
);
