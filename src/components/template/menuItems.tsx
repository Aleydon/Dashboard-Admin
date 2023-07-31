/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Link from 'next/link';

interface MenuItemProps {
  url: string;
  text: string;
  icon: any;
  className?: string;
}

export const MenuItem = ({ icon, url, text, className }: MenuItemProps) => (
  <>
    <li className="hover:bg-gray-200">
      <Link
        className={`
          flex flex-col
          justify-center
          items-center
          h-20 w-20
          dark:text-gray-200
          ${className}`}
        href={url}
      >
        {icon}
        <span className="text-xs text-gray-600">{text}</span>
      </Link>
    </li>
  </>
);
