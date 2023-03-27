import { Home } from './pages/Home'
import './App.css'
import { Navbar } from './components/Navbar'
import { SidebarProvider } from './context'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SidebarProvider>
          <Sidebar />
        <div className="content"> 
        <Navbar />
        <Home />
        <Footer />
        </div>
        </SidebarProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
