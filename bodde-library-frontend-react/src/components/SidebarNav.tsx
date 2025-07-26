import { AppMenu } from "./AppMenu";

interface SidebarNavProps {
  onMenuItemClick: () => void;
}

export const SidebarNav = ({ onMenuItemClick }: SidebarNavProps) => {
  return (

        <div className="surface-ground p-3 border-right-1 surface-border h-full">
          <AppMenu onMenuItemClick={onMenuItemClick} />
        </div>

  );
};
