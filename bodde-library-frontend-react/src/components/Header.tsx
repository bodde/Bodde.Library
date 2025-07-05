import { Button } from 'primereact/button';

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header = ({ onMenuToggle }: HeaderProps) => {
  return (
    <div className="card p-3 bg-primary-reverse">
      <div className="flex align-items-center justify-content-between">
        <Button
          icon="pi pi-bars"
          onClick={onMenuToggle}
          className="p-button-text p-button-plain"
        />
        <h2 className="m-0">Bodde Library</h2>
        <div className="flex gap-2">
          <Button icon="pi pi-user" className="p-button-text p-button-plain" />
          <Button icon="pi pi-cog" className="p-button-text p-button-plain" />
        </div>
      </div>
    </div>
  );
};