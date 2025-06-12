import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Footer } from '../../../core/components/Footer/Footer';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Footer
        variant="solid"
        radius="none"
        color="primary"
      >
        NONE
      </Footer>
      <Footer
        variant="solid"
        radius="xs"
        color="primary"
      >
        XS
      </Footer>
      <Footer
        variant="solid"
        radius="sm"
        color="primary"
      >
        SM
      </Footer>
      <Footer
        variant="solid"
        radius="md"
        color="primary"
      >
        MD
      </Footer>
      <Footer
        variant="solid"
        radius="lg"
        color="primary"
      >
        LG
      </Footer>
      <Footer
        variant="solid"
        radius="xl"
        color="primary"
      >
        XL
      </Footer>
      <Footer
        variant="solid"
        radius="full"
        color="primary"
      >
        FULL
      </Footer>
    </ExampleCard>
  </ExampleSection>
);
