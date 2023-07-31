import { NavBar } from '../navBar';
import { Header } from '../header';
import { Content } from '../content';

import { ReactNode } from 'react';

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: ReactNode;
}

export const Layout = ({ title, subTitle, children }: LayoutProps) => (
  <div className="flex h-screen w-screen">
    <NavBar />
    <div className="flex flex-col bg-gray-400 w-full p-7 ">
      <Header title={title} subTitle={subTitle} />
      <Content>{children}</Content>
    </div>
  </div>
);
