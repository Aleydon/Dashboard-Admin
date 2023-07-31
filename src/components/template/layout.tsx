import { Header } from './header';
import { Content } from './contents';

import { ReactNode } from 'react';

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: ReactNode;
}

export const Layout = ({ title, subTitle, children }: LayoutProps) => {
  return (
    <div className="flex flex-col bg-gray-100 h-screen w-screen">
      <Header title={title} subTitle={subTitle} />
      <Content>{children}</Content>
    </div>
  );
};
