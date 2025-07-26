import { AppMenu } from "./AppMenu";

interface SidebarNavProps {
  onMenuItemClick: () => void;
}

export const SidebarNav = ({ onMenuItemClick }: SidebarNavProps) => {
  return (

        <div className="p-3">
          <AppMenu onMenuItemClick={onMenuItemClick} />
        </div>

  );
};
