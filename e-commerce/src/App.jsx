import RoutesIndex from './routes/Index'
import NavbarComponent from './components/Navbar'
import { ProductProvider } from './context/ListProducts'
import './App.css'

function App () {
  return (
    <ProductProvider>
      <div className='App'>
        <NavbarComponent />
        <RoutesIndex />
      </div>
    </ProductProvider>
  )
}

export default App
