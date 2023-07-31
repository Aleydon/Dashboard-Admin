import { HomeIcon } from '../icons/home';
import { NotificationsIcon } from '../icons/notifications';
import { SettingsIcon } from '../icons/settings';
import { MenuItem } from '../menuItem';

export const NavBar = () => {
  return (
    <aside>
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
