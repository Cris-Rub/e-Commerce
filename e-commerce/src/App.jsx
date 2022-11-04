import RoutesIndex from './routes/Index'
import NavbarComponent from './components/Navbar'
import { ProductProvider } from './context/ListProducts'
import { AuthProvider } from './context/AuthContext'
import './App.css'

function App () {
  return (
    <AuthProvider>
      <ProductProvider>
        <div className='App'>
          <NavbarComponent />
          <RoutesIndex />
        </div>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
