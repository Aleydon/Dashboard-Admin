interface TitleProps {
  title: string;
  subTitle: string;
}

export const Title = ({ title, subTitle }: TitleProps) => (
  <div className="m-6">
    <h1
      className="
      font-black
      text-3xl"
    >
      {title}
    </h1>

    <h2
      className="
      font-light
      font-sm
      text-gray-600
      dark:text-gray-300
      "
    >
      {subTitle}
    </h2>
  </div>
);
