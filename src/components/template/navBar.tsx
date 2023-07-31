import Link from 'next/link';
import Image from 'next/image';

import { MenuItem } from './menuItems';
import { HomeIcon } from '@/icons/homeIcon';
import { SettingsIcon } from '@/icons/settingsIcon';
import { NotificationsIcon } from '@/icons/notificationsIcon';
import { LogoutIcon } from '@/icons/logoutIcon';

export const NavBar = () => {
  return (
    <aside
      className="
      dark:bg-gray-800 dark:text-gray-200
      bg-gray-200 text-gray-700
        flex flex-col"
    >
      <div
        className="
          flex flex-col justify-center h-20 w-20
          bg-gradient-to-r from-indigo-500 via-transparent
        to-purple-400 text-center"
      >
        <Link href="/">
          <Image src="/logo.svg" alt="logo" height={70} width={70} priority />
        </Link>
      </div>

      <ul className="flex-grow">
        <MenuItem url="/" icon={HomeIcon} text="Home" />
        <MenuItem url="/settings" icon={SettingsIcon} text="Settings" />
        <MenuItem
          url="/notifications"
          icon={NotificationsIcon}
          text="Notifications"
        />
      </ul>
      <ul>
        <MenuItem url="/" icon={LogoutIcon} text="Exit" />
      </ul>
    </aside>
  );
};
