import Link from 'next/link';

interface MenuItemProps {
  url: string;
  text: string;
  icon: any;
}

export const MenuItem = ({ icon, url, text }: MenuItemProps) => (
  <>
    <li className="hover:bg-gray-200">
      <Link
        className="flex flex-col justify-center items-center  h-20 w-20"
        href={url}
      >
        {icon}
        <span className="text-xs text-gray-600">{text}</span>
      </Link>
    </li>
  </>
);
