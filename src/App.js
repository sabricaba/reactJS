import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner';


function App() {
  return (
    <>
      <NavBar />
      <section>
          <ItemListContainer title="Bienvenid@, conozca nuestros productos!"/>
          <ItemDetailConteiner />
      </section>
    </>
  );
};

export default App;
