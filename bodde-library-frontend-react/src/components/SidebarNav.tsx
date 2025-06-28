export const SidebarNav = () => {
  return (
    <div
      className="bg-gray-100 border-right-1 border-gray-300"
      style={{ width: '250px' }}
    >
      <div className="p-3">
        <h4>Navigation</h4>
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
      </div>
    </div>
  );
};