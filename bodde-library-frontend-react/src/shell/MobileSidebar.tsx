import { Sidebar } from 'primereact/sidebar';
import { AppMenu } from './AppMenu';

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
      <AppMenu />
    </Sidebar>
  );
};