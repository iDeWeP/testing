import React, { type ReactNode, type FC } from 'react';

import Heading from '../lib/idewep/core/components/Heading/Heading';

interface ExampleSectionProps {
  title: string;
  children: ReactNode;
}

const ExampleSection: FC<ExampleSectionProps> = ({ title, children }) => {
  const id = title.toLowerCase().trim().replace(' ', '-');

  return (
    <section
      aria-labelledby={id}
    >
      <Heading
        size="4"
        id={id}
      >
        {title}
      </Heading>
      {children}
    </section>
  );
};

export default ExampleSection;
