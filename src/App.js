import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <section>
          <ItemListContainer title="Bienvenid@, conozca nuestros productos!"/>
      </section>
    </>
  );
};

export default App;
