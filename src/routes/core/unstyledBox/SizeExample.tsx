import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard align>
      <UnstyledBox size="none">NONE</UnstyledBox>
      <UnstyledBox size="xs">XS</UnstyledBox>
      <UnstyledBox size="sm">SM</UnstyledBox>
      <UnstyledBox size="md">MD</UnstyledBox>
      <UnstyledBox size="lg">LG</UnstyledBox>
      <UnstyledBox size="xl">XL</UnstyledBox>
      <UnstyledBox size="xxl">XXL</UnstyledBox>
    </ExampleCard>
    <ExampleCard align>
      <UnstyledBox size="xs-xs">XS-XS</UnstyledBox>
      <UnstyledBox size="sm-sm">SM-SM</UnstyledBox>
      <UnstyledBox size="md-md">MD-MD</UnstyledBox>
      <UnstyledBox size="lg-lg">LG-LG</UnstyledBox>
      <UnstyledBox size="xl-xl">XL-XL</UnstyledBox>
      <UnstyledBox size="xxl-xxl">XXL-XXL</UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
