import { AppMenu } from "./AppMenu";

export const SidebarNav = () => {
  return (
    <div
      className="surface-ground p-3 border-right-1 surface-border"
      style={{ width: "200px" }}
    >
      <h4 className="text-color">Navigation</h4>

      <AppMenu />
    </div>
  );
};
