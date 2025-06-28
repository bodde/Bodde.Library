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
        <SidebarNav />
        <WorkArea />
      </div>
      
      <Footer />
      
      <MobileSidebar 
        visible={sidebarVisible} 
        onHide={() => setSidebarVisible(false)} 
      />
    </div>
  );
}

export default App;