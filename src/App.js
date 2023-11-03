import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Shop } from './pages/Shop';
import { Navbar } from './components/Navbar/Navbar';
import { ShopCategory } from './pages/ShopCategory';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { LoginSignup } from './pages/LoginSignup';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/girls' element={<ShopCategory category="girl" />} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />
          <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product />}/>
          </Route>

          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
