import { ReactNode } from 'react';

interface ContentProps {
  children?: ReactNode;
}

export const Content = ({ children }: ContentProps) => (
  <div className="flex flex-col mt-7">{children}</div>
);
