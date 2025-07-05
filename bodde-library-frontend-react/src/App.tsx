import { useState } from 'react';
import { Header } from './components/Header';
import { SidebarNav } from './components/SidebarNav';
import { WorkArea } from './components/WorkArea';
import { Footer } from './components/Footer';
import { MobileSidebar } from './components/MobileSidebar';

import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './App.css';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div className="flex flex-column h-screen">
      <Header onMenuToggle={() => setSidebarVisible(true)} />
      
      <div className="flex flex-1">
        {/* Sidebar using theme surface */}
        <div className="surface-ground p-3 border-right-1 surface-border" style={{width: '200px'}}>
          <h4 className="text-color">Navigation</h4>
          <ul className="list-none p-0 m-0">
            <li className="p-2 text-color hover:surface-hover cursor-pointer border-round">
              <i className="pi pi-home mr-2"></i>Dashboard
            </li>
            <li className="p-2 text-color hover:surface-hover cursor-pointer border-round">
              <i className="pi pi-book mr-2"></i>Books
            </li>
          </ul>
        </div>
        
        {/* Work area using theme surface */}
        <div className="flex-1 p-4 surface-50">
          <div className="surface-card p-4 border-round shadow-1">
            <h3 className="text-color mt-0">Welcome to Bodde Library</h3>
            <p className="text-color">This is your main work area.</p>
          </div>
        </div>
      </div>
      
      {/* Footer using theme surface */}
      <div className="surface-900 text-0 p-3 text-center">
        <p className="m-0">© 2025 Bodde Library. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;