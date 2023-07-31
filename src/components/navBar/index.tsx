import Link from 'next/link';
import Image from 'next/image';

import { HomeIcon } from '../icons/home';
import { NotificationsIcon } from '../icons/notifications';
import { SettingsIcon } from '../icons/settings';
import { MenuItem } from '../menuItem';

export const NavBar = () => {
  return (
    <aside>
      <div className="flex flex-col justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 via-transparent to-purple-400 text-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" height={70} width={70} priority />
        </Link>
      </div>
      <ul>
        <MenuItem url="/" icon={HomeIcon} text="Home" />
        <MenuItem url="/settings" icon={SettingsIcon} text="Settings" />
        <MenuItem
          url="/notifications"
          icon={NotificationsIcon}
          text="Notifications"
        />
      </ul>
    </aside>
  );
};
