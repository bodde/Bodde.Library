import { useEffect, useState } from 'react';
import { Header } from './shell/Header';
import { SidebarNav } from './shell/SidebarNav';
import { WorkArea } from './shell/WorkArea';
import { Footer } from './shell/Footer';
import { useMediaQuery } from 'react-responsive';
import { Routes, Route } from "react-router";
import { Dashboard } from "./dashboard/Dashboard";

import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './styles/DesktopLayout.css';
import './styles/App.css';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [sidebarVisible, setSidebarVisible] = useState(!isMobile);


  useEffect(() => {
    setSidebarVisible(!isMobile);
  }, [isMobile]);

  return (
    <div className={`app-layout surface-0 border-round ${!sidebarVisible ? 'sidebar-hidden' : ''}`}>
      <div className="app-header surface-0 m-1">
        <Header onMenuToggle={() => setSidebarVisible(!sidebarVisible)} />
      </div>
      
      <div className="app-sidebar surface-0 m-1">
        <SidebarNav 
          onMenuItemClick={() => setSidebarVisible(!isMobile)} 
        />
      </div>
      
      <div className="app-workarea m-1 surface-card p-2 border-round">
        <Routes>
          <Route element={<WorkArea />}>
            <Route index element={<Dashboard />} />
            {/* Add more child routes here */}
          </Route>
        </Routes>
      </div>
      
      <div className="app-footer surface-0 m-1">
        <Footer />
      </div>
    </div>
  );
}

export default App;