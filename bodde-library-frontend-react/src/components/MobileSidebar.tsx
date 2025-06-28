import { Sidebar } from 'primereact/sidebar';

interface MobileSidebarProps {
  visible: boolean;
  onHide: () => void;
}

export const MobileSidebar = ({ visible, onHide }: MobileSidebarProps) => {
  return (
    <Sidebar
      visible={visible}
      onHide={onHide}
      className="w-full md:w-20rem"
    >
      <h4>Mobile Menu</h4>
      <ul className="list-none p-0 m-0">
        <li className="p-2 hover:bg-gray-200 cursor-pointer border-round">
          <i className="pi pi-home mr-2"></i>Dashboard
        </li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer border-round">
          <i className="pi pi-book mr-2"></i>Books
        </li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer border-round">
          <i className="pi pi-users mr-2"></i>Authors
        </li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer border-round">
          <i className="pi pi-chart-bar mr-2"></i>Reports
        </li>
      </ul>
    </Sidebar>
  );
};