import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer title='Bienvenid@, conozca nuestros productos!' />}></Route>
        <Route path="/item/:idProduct" element={<ItemDetailConteiner />}></Route>
        <Route path="/category/:idCategory" element={<ItemListContainer />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
