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
  <div>
    <NavBar />
    <Header title={title} subTitle={subTitle} />
    <Content>{children}</Content>
  </div>
);
