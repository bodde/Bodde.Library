import { useState } from 'react';
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

  return (
    <div className="flex flex-column h-screen">
      <div>{isMobile.toString()} {sidebarVisible.toString()}</div>
      <Header onMenuToggle={() => setSidebarVisible(!sidebarVisible)} />
      
      <div className="flex flex-1">
        <SidebarNav 
          visible={sidebarVisible} 
          onHide={() => setSidebarVisible(false)} 
        />
        
        {/* Work area using theme surface */}
        <WorkArea />

      </div>
      
      <Footer />

    </div>
  );
}

export default App;