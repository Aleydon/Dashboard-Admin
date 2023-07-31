import { ReactNode } from 'react';

interface ContentProps {
  children?: ReactNode;
}

export const Content = ({ children }: ContentProps) => (
  <div className="flex flex-col m-7">{children}</div>
);
