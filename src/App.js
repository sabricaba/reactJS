import './App.css';
import NavBar from './components/NavBar';
import Text from './components/ItemListContainer';
import CarWidget from './components/CarWidget';

function App() {
  return (
    <>
      <header>
          <NavBar />
          <CarWidget />
      </header>
      <section>
          <Text />
      </section>
    </>
  );
};

export default App;
