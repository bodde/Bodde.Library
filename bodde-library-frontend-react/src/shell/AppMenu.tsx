import { NavLink } from "react-router";


interface AppMenuProps {
  onMenuItemClick?: () => void;
}

export const AppMenu = ({ onMenuItemClick }: AppMenuProps) => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `p-2 cursor-pointer border-round flex align-items-center ${
            isActive ? "bg-primary text-primary-contrast" : "hover:bg-primary-reverse"
          }`
        }
        end
        onClick={onMenuItemClick}
      >
        <i className="pi pi-home mr-2"></i>Dashboard
      </NavLink>
      <NavLink
        to="/books"
        className={({ isActive }) =>
          `p-2 cursor-pointer border-round flex align-items-center ${
            isActive ? "bg-primary text-primary-contrast" : "hover:bg-primary-reverse"
          }`
        }
        onClick={onMenuItemClick}
      >
        <i className="pi pi-book mr-2"></i>Books
      </NavLink>
      <NavLink
        to="/authors"
        className={({ isActive }) =>
          `p-2 cursor-pointer border-round flex align-items-center ${
            isActive ? "bg-primary text-primary-contrast" : "hover:bg-primary-reverse"
          }`
        }
        onClick={onMenuItemClick}
      >
        <i className="pi pi-users mr-2"></i>Authors
      </NavLink>
      <NavLink
        to="/reports"
        className={({ isActive }) =>
          `p-2 cursor-pointer border-round flex align-items-center ${
            isActive ? "bg-primary text-primary-contrast" : "hover:bg-primary-reverse"
          }`
        }
        onClick={onMenuItemClick}
      >
        <i className="pi pi-chart-bar mr-2"></i>Reports
      </NavLink>
    </nav>
  );
};