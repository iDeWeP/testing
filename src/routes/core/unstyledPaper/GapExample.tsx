import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { Example } from './Example';

export const GapExample = () => (
  <ExampleSection title="Gap">
    <ExampleCard vertical>
      <Example gap="none">
        <UnstyledBox variant="light">NONE #1</UnstyledBox>
        <UnstyledBox variant="light">NONE #2</UnstyledBox>
        <UnstyledBox variant="light">NONE #3</UnstyledBox>
      </Example>
      <Example gap="xs">
        <UnstyledBox variant="light">XS #1</UnstyledBox>
        <UnstyledBox variant="light">XS #2</UnstyledBox>
        <UnstyledBox variant="light">XS #3</UnstyledBox>
      </Example>
      <Example gap="sm">
        <UnstyledBox variant="light">SM #1</UnstyledBox>
        <UnstyledBox variant="light">SM #2</UnstyledBox>
        <UnstyledBox variant="light">SM #3</UnstyledBox>
      </Example>
      <Example gap="md">
        <UnstyledBox variant="light">MD #1</UnstyledBox>
        <UnstyledBox variant="light">MD #2</UnstyledBox>
        <UnstyledBox variant="light">MD #3</UnstyledBox>
      </Example>
      <Example gap="lg">
        <UnstyledBox variant="light">LG #1</UnstyledBox>
        <UnstyledBox variant="light">LG #2</UnstyledBox>
        <UnstyledBox variant="light">LG #3</UnstyledBox>
      </Example>
      <Example gap="xl">
        <UnstyledBox variant="light">XL #1</UnstyledBox>
        <UnstyledBox variant="light">XL #2</UnstyledBox>
        <UnstyledBox variant="light">XL #3</UnstyledBox>
      </Example>
      <Example gap="xxl">
        <UnstyledBox variant="light">XXL #1</UnstyledBox>
        <UnstyledBox variant="light">XXL #2</UnstyledBox>
        <UnstyledBox variant="light">XXL #3</UnstyledBox>
      </Example>
    </ExampleCard>
  </ExampleSection>
);
