interface TitleProps {
  title: string;
  subTitle: string;
}

export const Title = ({ title, subTitle }: TitleProps) => (
  <>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
  </>
);
