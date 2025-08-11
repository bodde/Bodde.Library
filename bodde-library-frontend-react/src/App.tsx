import { useEffect, useState } from 'react';
import { Header } from './shell/Header';
import { SidebarNav } from './shell/SidebarNav';
import { WorkArea } from './shell/WorkArea';
import { Footer } from './shell/Footer';
import { useMediaQuery } from 'react-responsive';
import { Routes, Route, useLocation } from "react-router";
import { Dashboard } from "./dashboard/Dashboard";
import { BookList } from "./books/BookList";

import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './styles/DesktopLayout.css';
import './styles/App.css';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [sidebarVisible, setSidebarVisible] = useState(!isMobile);
  const location = useLocation();


  useEffect(() => {
    setSidebarVisible(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Dashboard - Bodde Library";
        break;
      case "/books":
        document.title = "Books - Bodde Library";
        break;
      case "/authors":
        document.title = "Authors - Bodde Library";
        break;
      case "/reports":
        document.title = "Reports - Bodde Library";
        break;
      default:
        document.title = "Bodde Library";
    }
  }, [location.pathname]);

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
            <Route path="books" element={<BookList />} />
            <Route path="authors" element={<div>Authors (todo)</div>} />
            <Route path="reports" element={<div>Reports (todo)</div>} />
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