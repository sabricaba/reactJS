import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartContextProvider from './components/CartContext';


function App() {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer title='Bienvenid@, conozca nuestros productos!' />}></Route>
        <Route path="/item/:idProduct" element={<ItemDetailConteiner />}></Route>
        <Route path="/category/:idCategory" element={<ItemListContainer />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  );
};

export default App;
