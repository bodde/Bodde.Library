import { Sidebar } from "primereact/sidebar";
import { AppMenu } from "./AppMenu";

interface SidebarNavProps {
  visible: boolean;
  onHide: () => void;
}

export const SidebarNav = ({ visible, onHide }: SidebarNavProps) => {
  return (
    <>
      {visible && (
        <div className="surface-ground p-3 border-right-1 surface-border">
          <h4 className="text-color">Navigation</h4>
          <AppMenu />
        </div>
      )}
    </>
  );
};
