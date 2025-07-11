import type { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const ExampleSection = ({ title, children }: Props) => {
  const id = title
    .toLowerCase()
    .trim()
    .replace(/\s{2,}/, ' ');

  return (
    <div
      aria-labelledby={id}
      className="flex flex-col"
    >
      <h1 id={id}>{title}</h1>
      {children}
    </div>
  );
};
