import Link from 'next/link';

interface MenuItemProps {
  url: string;
  text: string;
  icon: any;
  className?: string;
}

export const MenuItem = ({ icon, url, text, className }: MenuItemProps) => (
  <>
    <li
      className="
      hover:bg-gray-300
      dark:hover:bg-gray-700"
    >
      <Link
        className={`
          flex
          flex-col
          justify-center
          items-center
          h-20
          w-20
          ${className}`}
        href={url}
      >
        {icon}
        <span
          className="
            text-xs
          text-gray-600
          dark:text-gray-200"
        >
          {text}
        </span>
      </Link>
    </li>
  </>
);
