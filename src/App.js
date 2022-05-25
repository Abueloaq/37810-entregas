
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar'
/* import ItemListContainer from './components/ItemListContainer'; */
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App bg-dark min-vh-100">
      <Navbar />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
