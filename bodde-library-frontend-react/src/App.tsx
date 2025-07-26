import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { SidebarNav } from './components/SidebarNav';
import { WorkArea } from './components/WorkArea';
import { Footer } from './components/Footer';
import { useMediaQuery } from 'react-responsive';

import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './App.css';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [sidebarVisible, setSidebarVisible] = useState(!isMobile);

  useEffect(() => {
    setSidebarVisible(!isMobile);
  }, [isMobile]);

  return (
    <div className={`app-layout ${!sidebarVisible ? 'sidebar-hidden' : ''}`}>
      <div className="app-header">
        <Header onMenuToggle={() => setSidebarVisible(!sidebarVisible)} />
      </div>
      
      <div className="app-sidebar">
        <SidebarNav 
          onMenuItemClick={() => setSidebarVisible(!isMobile)} 
        />
      </div>
      
      <div className="app-workarea">
        <WorkArea />
      </div>
      
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;