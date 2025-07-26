interface AppMenuProps {
  onMenuItemClick?: () => void;
}

export const AppMenu = ({ onMenuItemClick }: AppMenuProps) => {
  const handleMenuItemClick = () => {
    // Handle menu item click logic here
    if (onMenuItemClick) {
      onMenuItemClick();
    }
  };

  return (
    <ul className="list-none p-0 m-0">
      <li
        className="p-2 hover:bg-primary cursor-pointer border-round"
        onClick={handleMenuItemClick}
      >
        <i className="pi pi-home mr-2"></i>Dashboard
      </li>
      <li
        className="p-2 hover:bg-primary cursor-pointer border-round"
        onClick={handleMenuItemClick}
      >
        <i className="pi pi-book mr-2"></i>Books
      </li>
      <li
        className="p-2 hover:bg-primary cursor-pointer border-round"
        onClick={handleMenuItemClick}
      >
        <i className="pi pi-users mr-2"></i>Authors
      </li>
      <li
        className="p-2 hover:bg-primary cursor-pointer border-round"
        onClick={handleMenuItemClick}
      >
        <i className="pi pi-chart-bar mr-2"></i>Reports
      </li>
    </ul>
  );
};