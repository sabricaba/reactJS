import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <section>
          <ItemListContainer title="Hola Flavio, buenas noches!"/>
      </section>
    </>
  );
};

export default App;
