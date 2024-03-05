
import {Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'
import NavigationBar from './components/Navbar/Navbar'

function App() {
 

  return (
    <div>
      <ToastContainer position="bottom-center" limit={1} />
      
      <header>
      
        <NavigationBar/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
