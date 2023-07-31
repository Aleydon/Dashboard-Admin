import { Title } from './title';

interface HeaderProps {
  title: string;
  subTitle: string;
}

export const Header = ({ title, subTitle }: HeaderProps) => (
  <>
    <Title title={title} subTitle={subTitle} />
  </>
);
